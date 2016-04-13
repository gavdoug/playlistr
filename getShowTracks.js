var request = require('request');
var events = require('events');
var parseJSON = require('./parseJSON.js');

var eventsEmitter = new events.EventEmitter();

var getTracks = function(url, times, complete) {
	var reqUrl = url + '&startTime=' + times.start + '&endTime=' + times.end;

	var reqHandler = function (error, response, body) {
		if(error) console.log(error);
   		else {
   			console.log('Found Tracks...');
			var objResp = parseJSON.parse(body);
			complete(objResp.Plays);
			eventsEmitter.emit('gotTracks');
   		} 	
	};

	request(reqUrl, reqHandler);

};

module.exports = {
    getTracks : getTracks,
    events : eventsEmitter
};