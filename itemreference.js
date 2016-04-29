var jamarest = require('./jamarest')
var slackbot = require('./slackbot')
var jamaBaseUrl = "https://" + process.env.JAMA_BASE_URL;

slackbot.hears(['[0-9a-zA-Z]+-[0-9a-zA-Z]+-[0-9]+'], ['direct_message','direct_mention','mention', 'ambient'],function(bot,message) {
	var match = message.match[0]
	jamarest.get.abstractitems(match, function(data){
		if(data && data.data && data.data[0]) {
			var item = data.data[0];
			var itemTitle = item.fields.name;
			var itemUrl = jamaBaseUrl + "/perspective.req#/items/" + item.id;

			// example of what the attachment looks like: https://goo.gl/6HUzKJ
			var botResponse = {"attachments": [
				{
					"color": "good",
					"author_name": item.documentKey,
					"author_link": itemUrl,
					"author_icon": jamaBaseUrl + "/img/jama-logo-2013.png",
					"text": itemTitle
				}
			]};

			bot.reply(message, botResponse);
		}
		else {
			if(message.event == "direct_message"){
				bot.reply(message, {"attachments": [
					{
						"color": "danger",
						"text": "*" + match.toUpperCase() + "* not found.",
						"mrkdwn_in": ["text"]
					}
				]});
			}
		}
	});
});
