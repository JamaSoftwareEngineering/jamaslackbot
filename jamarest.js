/*
Jama Rest modfule

Include Jama's base url in an environment variable:
export JAMA_BASE_URL='www.jamaserviceurl.com'
*/
var _=require('lodash');
var globalToken;
var path = require('path');
var oauth = require('./oauth');
var https = require('https');
var Promise = require('bluebird');
var querystring = require('querystring');

var header = function(token, restPath, method){
  var ret = {
    hostname: process.env.JAMA_BASE_URL,
    port: 443,
    path: restPath,
    method: method,
    headers:{
      Authorization: 'Bearer '+ token,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  return ret;
}

function tokenWrapper(restCall, headers) {
  return new Promise(function(resolve, reject) {
      var req = restCall.apply(this, [headers, function(res) {
          if (res.statusCode === 401) { // Bad auth

                oauth.getToken(function (token) {
                    globalToken = token;

                    headers = header(token, headers.path, headers.method);
                    var renewedReq = restCall.apply(this, [headers, resolve]);

                    renewedReq.end();
                }); // This could be replaced with Basic auth
            } else {
                resolve(res);
            }
        }]);

        req.end();
    });
}

function summarizeResponse(res) {
    return new Promise(function (resolve, reject) {
        if (res) {
            var allData = '';

            res.on('data', function (chunk) {
                allData += chunk.toString('utf8');
            });

            res.on('end', function () {
                resolve(allData);
            });
        }
    });
}

function startAtLooper(pathFn, inc, start) {
    return function () {
        var ret = pathFn(start);
        start += inc;

        return ret;
    }
}

function checkIfLast(data, onEach, ifLast, ifNot) {
  onEach(data);

  var lastItemIndex = data.meta.pageInfo.startIndex + data.meta.pageInfo.resultCount;

  if (lastItemIndex < data.meta.pageInfo.totalResults) {
    perform();
  } else {
    resolve(users);
  }
}

module.exports = {
  get:{
    abstractitems: function(containsString, onComplete){
      var abstractitemsQuery = "abstractitems?"+querystring.stringify({contains:containsString});
      tokenWrapper(https.request, header(globalToken,path.join('/', 'rest', 'latest', abstractitemsQuery), 'GET')).then(summarizeResponse).then(function(data){
          onComplete(JSON.parse(data));
      });
    }
  }
}
