var request = require('request');
var parseJSON = require('./parseJSON.js');

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
				}
			}; 
   		} 	
	};
	request(url, reqHandler);
};

module.exports = {
    getTime : getTime
};