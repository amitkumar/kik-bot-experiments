'use strict';

let request = require('request');
let getenv = require('getenv');

var options = {
    uri : 'https://api.kik.com/v1/config',
    method : 'GET',
    auth: {
        'user': getenv('KIK_USERNAME'),
        'pass': getenv('KIK_APIKEY'),
        'sendImmediately': false
    }
}
request(options, function(error, response, body){
    console.log('GET bot config callback', error, body);
});