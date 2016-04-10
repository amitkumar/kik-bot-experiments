'use strict';

let request = require('request');

var options = {
    uri : 'https://api.kik.com/v1/config',
    method : 'GET',
    auth: {
        'user': '<username>',
        'pass': '<api_key>',
        'sendImmediately': false
    }
}
request(options, function(error, response, body){
    console.log('GET bot config callback', error, body);
});