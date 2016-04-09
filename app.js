var request = require('request');

var showName = 'Swingin\' Doors';


var requestHandler = function (error, response, body) {
	if (!error && response.statusCode == 200) {



		var objResp = JSON.parse(body, function(key, value) {
		  if (typeof value === 'string') {
		    var d = /\/Date\((\d*)\)\//.exec(value);
		    return (d) ? new Date(+d[1]) : value;
		  }
		  return value;
		});


		for (var i in objResp.Items) {
			
			var item = objResp.Items[i];
			if (item.Program.Name == showName){ 

				console.log('Show: ', showName);
				
				var shows = item.Shows;
				console.log('Last Start: ', shows[0].CreatedDate);
				console.log('Last End: ', shows[0].EndDate);

				// http://cache.kexp.org/cache/plays?startTime=2016-03-31T01:00&endTime=2016-03-31T03:00&channel=1


			};
		}; 





  	} else {
  		console.log('A problem...');
  	}



};

var getTrack = request ("http://cache.kexp.org/cache/recentShows?by=program&channel=1", requestHandler);


