var request = require('request');
var parseJSON = require('./parseJSON.js');



var getTracks = function(url, times, complete) {
	var reqUrl = url + '&startTime=' + times.start + '&endTime=' + times.end;

	var reqHandler = function (error, response, body) {
		if(error) console.log(error);
   		else {
			var objResp = parseJSON.parse(body);



			console.log(objResp.Plays[0]);

			/*for (var i in objResp.Items) {
				

				//TODO --- PARSE THE JSON THING

				var item = objResp.Items[i];
				if (item.Program.Name == showName) { 
					console.log('Found Tracks...');
					complete(item.Shows[0]);
				}
			}; */
   		} 	
	};



	request(reqUrl, reqHandler);

};

module.exports = {
    getTracks : getTracks
};