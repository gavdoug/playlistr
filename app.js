var lastShow = require('./lastShow.js');

// Setup
var url = 'http://cache.kexp.org/cache/recentShows?by=program&channel=1';
var showName = 'Swingin\' Doors';


lastShow.get(url, showName);