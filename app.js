var moment = require('moment');
var lastShow = require('./lastShow.js');
var getShowTracks = require('./getShowTracks.js');

// Setup


var showsUrl = 'http://cache.kexp.org/cache/recentShows?by=program&channel=1';
var showName = 'Swingin\' Doors';
var tracksUrl = 'http://cache.kexp.org/cache/plays?channel=1';

var getShow = function () {
    var times; 
    var tracks;
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

         getShowTracks.getTracks(tracksUrl, times, function(shows){
            tracks = shows;
         });
        
    });  

    getShowTracks.events.on('gotTracks', function() {
        console.log(tracks);
        // Barf out some track info here
        for (var i in tracks) {
            if (tracks[i].Track){
                var tName = tracks[i].Track.Name;
                var artist = tracks[i].Artist.Name;
                console.log(artist + ', ' + tName);
            }
        }
    });



};







getShow(); // Start it all up
// https://github.com/jamon/playmusic   
//  http://cache.kexp.org/cache/plays?startTime=2016-04-1T01:04&endTime=2016-04-1T04:04&channel=1