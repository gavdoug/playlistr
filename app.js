var lastShow = require('./lastShow.js');
var moment = require('moment');
// Setup
var url = 'http://cache.kexp.org/cache/recentShows?by=program&channel=1';
var showName = 'Swingin\' Doors';

var show = lastShow.getTime(url, showName, function(show) {

    var cleanDate = function(date) {
        var date = moment(date).utc(); // Force UTC
        return date.format('YYYY-MM-D') + 'T' + date.format('HH:MM');
    };

    return {
        start : cleanDate(show.AirDate),
        end : cleanDate(show.EndDate)
    };

});

//  http://cache.kexp.org/cache/plays?startTime=2016-04-1T01:04&endTime=2016-04-1T04:04&channel=1
