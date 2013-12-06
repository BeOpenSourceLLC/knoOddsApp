var req = require('request');
var mu = require('mustache');
var csv = require('fast-csv');
var async = require('async')
var http = require('http');

mu.root = __dirname + '/templates';

var nba = "data/nba13-14.csv";

parseSchedule = function(sport) {
	return csv(sport)
 .on("data", function(data){
     console.log(data);
 })
 .on("end", function(){
     console.log("done");
 })
 .parse();
};

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write(function(err, response){
  	parseSchedule(nba);
  	response.end("Hello World\n");
  });
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
// include this in the server logic:
// mu.clearCache();

// var stream = mu.compileAndRender('index.html', {name: "john"});
// util.pump(stream, res);

