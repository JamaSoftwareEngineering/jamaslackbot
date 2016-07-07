# Requirements

* Node.js 5.8.0 or greater.
* OAuth username and passphrase for Jama.
* Slackbot auth token.

# Installation

* `npm install`
* `export JAMA_BASE_URL='www.jamaserviceurl.com'`
* `export JAMA_SLACK_TOKEN='xoxb-123456-SLACKTOKEN'`
* `export JAMA_OAUTH_URL = 'www.example.com/rest/'`
* `export JAMA_CONSUMER_KEY = 'user_key'`
* `export JAMA_CONSUMER_SECRET = 'YOURCONSUMERSECRET'`

# Usage

* Run 'source env.sh' to use your environment variables as noted in Installation guide above (e.g. source /git/jamaslackbot/env.sh)
* Run `node index.js` in your App folders (e.g. node.js /git/jamaslackbot/index.js)
* To keep a process running constantly in case of failure, please install forever (https://www.npmjs.com/package/forever) to ensure that the node process runs continuously
* Invite the Slack bot into your channel(s).
* Any reference to a Jama document key will retrieve the link, name and description if the configured user has permission to view it.

## License

This project is licensed under [the Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt).

## About Jama

Jama is software for better, faster requirements definition, management, verification and validation, from inception to
production. Our vision is of Modern Product Delivery. Building new products shouldn’t be frustrating and wasteful. It
ought to be enlightening and profitable. We make possible the impossible products of the future. Find more information
on [our web site](http://www.jamasoftware.com/). Jama Software is a fast-growing company, and we are [hiring]
(http://www.jamasoftware.com/company/careers/).