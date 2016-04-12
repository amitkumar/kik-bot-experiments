# kik-bot-experiments
Experimenting with what's possible with Kik bots. 

Running a simple express.js server and a bot that, so far, does the following:

- Tell you the weather: "weather brooklyn"
	> "Breezy"
- Echo back your message if it doesn't start with "weather "

Visit this bot on Kik: @hello.bot


# Set up
- Create environment variables for your Kik bot settings:
	```shell
	$ export KIK_USERNAME=echo.bot
	$ export KIK_APIKEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
	$ export KIK_WEBHOOK=https://example.com/incoming
	````

	Set `KIK_USERNAME` and `KIK_APIKEY` with your bot's settings from https://dev.kik.com/#/engine/. 

	Set `KIK_WEBHOOK` with the URL of your server.

	To make sure these environment variables are set for every shell session, add those lines to your ~/.bash_profile file.

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