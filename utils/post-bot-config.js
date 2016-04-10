'use strict';

let request = require('request');

var options = {
    uri : 'https://api.kik.com/v1/config',
    method : 'POST',
    auth: {
        'user': 'hello.bot',
        'pass': '1300e324-fc0f-433d-9767-15ff59a801d5',
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