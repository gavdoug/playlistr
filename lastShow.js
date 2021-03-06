var request = require('request');
var events = require('events');
var parseJSON = require('./parseJSON.js');

var eventsEmitter = new events.EventEmitter();


var getTime = function(url, showName, complete) {
	var reqHandler = function (error, response, body) {
		if(error) console.log(error);
   		else {
			var objResp = parseJSON.parse(body);
			for (var i in objResp.Items) {
				var item = objResp.Items[i];
				if (item.Program.Name == showName) { 
					console.log('Found Show Times...');
					complete(item.Shows[0]);
					eventsEmitter.emit('gotShow');
				}
			}; 
   		} 	
	};
	request(url, reqHandler);
};

module.exports = {
    getTime : getTime,
    events : eventsEmitter
};