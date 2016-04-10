'use strict';

let request = require('request');
let config = require('../config');

var options = {
    uri : 'https://api.kik.com/v1/config',
    method : 'POST',
    auth: {
        'user': config.username,
        'pass': config.apiKey,
        'sendImmediately': false
    },
    json: {
        'webhook': config.webhook,
        'features': {
            'manuallySendReadReceipts': false,
            'receiveReadReceipts': false,
            'receiveDeliveryReceipts': false,
            'receiveIsTyping': false
        }            
    }
}
request(options, function(error, response, body){
    console.log('POST bot config callback', error, body);
});