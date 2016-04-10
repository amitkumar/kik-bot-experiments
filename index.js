'use strict';

let express = require('express');
let util = require('util');
let http = require('http');
let Bot  = require('@kikinteractive/kik');

var app = express();

// Configure the bot API endpoint, details for your bot
let bot = new Bot({
    username: 'hello.bot',
    apiKey: '1300e324-fc0f-433d-9767-15ff59a801d5',
    baseUrl: 'kik-echobot.ngrok.io'
});

bot.onTextMessage((message) => {
    console.log('hello got a message', message);
    message.reply('hello! You sent me the message: "' + message.body + '"');
});

app.get('/', function(req, res){
	res.send('Hello');
});

app.use(bot.incoming());

app.listen(process.env.PORT || 8080, function(){
	console.log('Server started on port ' + (process.env.PORT || 8080));
});