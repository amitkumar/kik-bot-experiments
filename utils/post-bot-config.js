'use strict';

let request = require('request');

var options = {
    uri : 'https://api.kik.com/v1/config',
    method : 'POST',
    auth: {
        'user': '<username>',
        'pass': '<api_key>',
        'sendImmediately': false
    },
    json: {
        'webhook': 'https://example.com/incoming',
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