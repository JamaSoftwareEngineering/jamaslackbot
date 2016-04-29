/*
 Set the Slackbot token in your environment variables:
 export JAMA_SLACK_TOKEN='xoxb-123456-SLACKTOKEN'
 */
var Botkit = require('botkit');

var controller = Botkit.slackbot({
    debug: false
});

controller.spawn({
    token: process.env.JAMA_SLACK_TOKEN
}).startRTM(function (err, bot, payload) {

    controller.users = payload.users;

    bot.updateMessage = function (text, ts, channel, cb) {
        var slack_message = {
            token: process.env.JAMA_SLACK_TOKEN,
            ts: ts,
            channel: channel,
            text: text,
            as_user: true
        };

        bot.msgcount++;

        bot.api.chat.update(slack_message, function (err, res) {
            if (err) {
                cb && cb(err);
            } 
            else {
                cb && cb(null, res);
            }
        });
    };

    if (err) {
        throw new Error(err);
    }
});

module.exports = controller;
