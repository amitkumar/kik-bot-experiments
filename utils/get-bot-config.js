'use strict';

let request = require('request');
let config = require('../config');

var options = {
    uri : 'https://api.kik.com/v1/config',
    method : 'GET',
    auth: {
        'user': config.username,
        'pass': config.apiKey,
        'sendImmediately': false
    }
}
request(options, function(error, response, body){
    console.log('GET bot config callback', error, body);
});