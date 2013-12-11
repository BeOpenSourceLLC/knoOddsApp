var req = require('request');
var mu = require('mustache');
var async = require('async')
var http = require('http');
var express = require('express')
mu.root = __dirname + '/templates';
var nbaJson = require('./data/nba13-14.json');
// Configure our HTTP server to respond with Hello World to all requests.
var app = express();

var schedules = "";

app.get('/nba', function(req, res){
	makeSchedule();
	res.writeHead('200', { 'content': 'text/html' });
	res.write('success');
	res.end();
});
app.listen(8000);
// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
// include this in the server logic:
// mu.clearCache();
	function getGames(ai, date){
		var games = nbaJson[ai];
		var name = nbaJson[ai]["Date"];
		if ( name !== "" ){
			for(var a=0; a<games.length; a++){
				var game = games[date];
				if ( game !== "" ) {
					console.log(team + ': ' + game);
					schedules += team + ': ' + game + '\n\t';
				} else {
					console.log(team + ': no game');
					schedules += team + ': no game\n\t';
				}
			}
		}
	}
function makeSchedule(){
	var dateKey = nbaJson.length - 1;
	var dates = nbaJson[dateKey];
	for(var i=1; i<dates.length; i++){
		var date = JSON.stringify(dates[i]);
		console.log('Date: ' + date + '\n\t');
		getGames(i, date);
	}
}
makeSchedule();