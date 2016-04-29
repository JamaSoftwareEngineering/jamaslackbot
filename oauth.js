/*
 Oauth module for Jama Slackbot.

 Add credentials to your environment variables on the system:
 export JAMA_OAUTH_URL = 'www.example.com/rest/'
 export JAMA_CONSUMER_KEY = 'user_key'
 export JAMA_CONSUMER_SECRET = 'YOURCONSUMERSECRET'
 */

module.exports = {
    getToken: function (onToken) {
        var OAuth = require('oauth');
        var OAuth2 = OAuth.OAuth2;

        var oauthUrl = process.env.JAMA_OAUTH_URL;
        var consumerKey = process.env.JAMA_CONSUMER_KEY;
        var consumerSecret = process.env.JAMA_CONSUMER_SECRET;

        var oauth2 = new OAuth2(
            consumerKey,
            consumerSecret,
            'https://' + consumerKey + ':' + consumerSecret + '@' + oauthUrl,
            null,
            'oauth/token',
            null);

        oauth2.getOAuthAccessToken(
            '', 
            { 'grant_type': 'client_credentials' },
            function (e, access_token, refresh_token, results) {
                onToken(access_token);
            });

    }
};
