var moment = require('moment');
var lastShow = require('./lastShow.js');
var getShowTracks = require('./getShowTracks.js');

// Setup


var showsUrl = 'http://cache.kexp.org/cache/recentShows?by=program&channel=1';
var showName = 'Swingin\' Doors';
var tracksUrl = 'http://cache.kexp.org/cache/plays?channel=1';

var getShow = function () {
    var times; 
    lastShow.getTime(showsUrl, showName, function(show) {

       var cleanDate = function(date) {
            var date = moment(date).utc(); // Force UTC
            return date.format('YYYY-MM-D') + 'T' + date.format('HH:MM');
        };

        times = {  
            start : cleanDate(show.AirDate),
            end : cleanDate(show.EndDate)
        };

    });


    lastShow.events.on('gotShow', function(){

        console.log('start ', times.start);
        console.log('end ', times.end);

        // TODO
        // Work out getShowTracks.js, pass in times

        getShowTracks.getTracks(tracksUrl, times, function(){});

        
    });  





};







getShow(); // Start it all up
// https://github.com/jamon/playmusic
//  http://cache.kexp.org/cache/plays?startTime=2016-04-1T01:04&endTime=2016-04-1T04:04&channel=1