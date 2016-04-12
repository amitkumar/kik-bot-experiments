# kik-bot-experiments
Experimenting with what's possible with Kik bots. 

Running a simple express.js server and a bot that echos user messages.

Visit this bot on Kik: @hello.bot


# Set up
- Add a `config.json` file at the project root with the following content:
	
	```javascript
	{
		"username": "echo.bot",
		"apiKey" : "",
		"webhook" : "http://example.com/incoming"
	}
	```
	
	Replace `username` and `apiKey` with your bot's settings from https://dev.kik.com/#/engine/. 

	Replace `webhook` with the URL of your server.

- To configure your bot with Kik, you have to submit a POST to their server with your bot's config settings. 
	This project contains a node.js versions of the Python scripts at https://dev.kik.com/#/docs/messaging#configuration. 

	Run these scripts from the shell.
	
	First run the POST:

	```shell
	$ node ./utils/post-bot-config
	POST bot config callback null { webhook: 'https://kik-bot-experiments.herokuapp.com/incoming',
	features: 
	{ receiveReadReceipts: false,
	  receiveIsTyping: false,
	  manuallySendReadReceipts: false,
	  receiveDeliveryReceipts: false } }
	```

	To verify that Kik has properly received your config, run the GET:
  	```shell
  	$ node ./utils/get-bot-config
	GET bot config callback null {"webhook":"https://kik-bot-experiments.herokuapp.com/incoming","features":{"receiveReadReceipts":false,"receiveIsTyping":false,"manuallySendReadReceipts":false,"receiveDeliveryReceipts":false}}
	```

# Misc Notes & Resources
- https://dev.kik.com/#/docs/getting-started
- https://github.com/kikinteractive/kik-node#your-first-echo-bot
- https://dev.kik.com/#/docs/messaging#configuration
- By default, the bot.incoming() middleware will intercept traffic to '/incoming'. Set a custom path with the `incomingPath` setting when creating `new Bot({})`