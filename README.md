# Requirements

* Node.js 5.8.0 or greater.
* Oauth username and passphrase for Jama.
* Slackbot auth token.

# Installation

* `npm install`
* `export JAMA_BASE_URL='www.jamaserviceurl.com'`
* `export JAMA_SLACK_TOKEN='xoxb-123456-SLACKTOKEN'`
* `export JAMA_OAUTH_URL = 'www.example.com/rest/'`
* `export JAMA_CONSUMER_KEY = 'user_key'`
* `export JAMA_CONSUMER_SECRET = 'YOURCONSUMERSECRET'`

# Usage

* `node index.js`
* Invite the Slack bot into your channel(s).
* Any reference to a Jama document key will retrieve the link, name and description if the configured user has permission to view it.
