# kik-bot-experiments
Experimenting with what's possible with Kik bots


# Steps to set up

- https://github.com/kikinteractive/kik-node#your-first-echo-bot
- Set up a publicly-accessible server for your app. Its URL will be 
- By default, the bot.incoming() middleware will intercept traffic to '/incoming'. Set a custom path with the `incomingPath` setting when creating `new Bot({})`

- To configure your bot with Kik, you have to submit a POST with authentication & config settings. 
  https://dev.kik.com/#/docs/messaging#configuration

  Those instructions use Python. For javascript, run /utils/post-bot-config.js
  `$ node ./utils/post-bot-config`

