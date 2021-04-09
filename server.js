var cluster = require('cluster');
var http = require('http');
var https = require('https');
var app = require('./app');

var argv = {};

for (var i = 0; i < process.argv.length; i = i + 2) {
        argv[process.argv[i]] = process.argv[i + 1];
}

var port = argv['--PORT'] || 3000;
var httpServer = http.createServer(app);
httpServer.listen(port, null, function() {
        console.log('HTTP server started: http://localhost:' + port);
});
