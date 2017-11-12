var express = require('express');
var app = express();
var path = require('path');

// Serve index and files in 'public' assets directory 
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.use(express.static(path.join(__dirname, 'assets')));

// Build API for friends calls

var babySteps = require(path.join(__dirname, 'baby-steps.json'));

app.get('/api', function(req, res) {
    res.json({"message":"This is an API v1 to return friends currently active on the Baby Steps"});   
});

app.get('/api/friends', function(req, res) {
    res.json(babySteps);   
});

app.get('/api/friends/:step_id', function(req, res) {
	var stepFriends = findFriendsStep(req.params.step_id, babySteps);
    res.json(stepFriends);   
});

function findFriendsStep(number, json) {
	var list = [];

	for(person in json.friends) {
		if(number == json.friends[person].babyStep) {
			list.push(json.friends[person]);
		}
	}
	return {friends: list};
}

app.listen(8080);

