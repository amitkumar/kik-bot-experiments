'use strict';

let util = require('util');
let http = require('http');
let Bot  = require('@kikinteractive/kik');

// Configure the bot API endpoint, details for your bot
let bot = new Bot({
    username: 'echo.bot',
    apiKey: '7b939d69-e840-4d22-aab8-4188c2198f8a',
    baseUrl: 'kik-echobot.ngrok.io'
});

bot.onTextMessage((message) => {
    console.log('hello got a message', message);
    message.reply('hello! You sent me the message: "' + message.body + '"');
});

// Set up your server and start listening
let server = http
    .createServer(bot.incoming())
    .listen(process.env.PORT || 8080);
console.log('server started');