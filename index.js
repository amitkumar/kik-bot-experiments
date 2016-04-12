'use strict';

let express = require('express');
let util = require('util');
let http = require('http');
let Bot  = require('@kikinteractive/kik');
let config = require('./config');
let request = require('request');

var app = express();

// Configure the bot API endpoint, details for your bot
let bot = new Bot({
	username: config.username,
	apiKey: config.apiKey,
	baseUrl: 'kik-echobot.ngrok.io'
});


function processTextMessage(message, callback){
	if (message.indexOf('weather') === 0){
		var location = message.slice('weather '.length);
		var options = {
			uri : 'https://query.yahooapis.com/v1/public/yql?q=select%20item.condition.text%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D' + encodeURIComponent('"' + location + '"') + ')&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
			method : 'GET'
		};
		request(options, function(error, response, body){
			console.log('GET weather callback', error, body);
			if (error){
				callback(error, body);
			} else {
				var jsonBody = JSON.parse(body);
				callback(null, jsonBody.query.results.channel.item.condition.text);
			}
		});
	} else {
		callback(null, 'Hello! You sent me the message: "' + message + '". I don\'t know how to respond to that. You can try asking me for the weather: "weather brooklyn", and maybe some more things in the future.');
	}
}


bot.onTextMessage((message) => {
	console.log('Hello got a message', message);
	processTextMessage(message, function(err, response){
		message.reply(response);
	});
});



app.get('/', function(req, res){
	res.send('Hello. This is a demo Kik chatbot. Visit @hello.bot in Kik.');
});


/**
 * @param message {query param}
 */
app.get('/message', function(req, res){
	console.log(req.query);
	processTextMessage(req.query.message, function(err, response){
		res.send(response);
	});
});

 
app.use(bot.incoming());

app.listen(process.env.PORT || 8080, function(){
	console.log('Server started on port ' + (process.env.PORT || 8080));
});