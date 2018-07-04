var express = require('express');
var babySteps = require('./baby-steps.json');
var exphbs  = require('express-handlebars');
var _ = require('underscore');

var app = express ();
var hbs = exphbs.create({});

// templating
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', 'app/views');

// static assets
app.use(express.static('app'));
app.use(express.static('app/assets'));

app.get('/', function (req, res) {
  var targetFriends = _.where(babySteps.friends, {babyStep: 1});
  babySteps.friends = targetFriends;
  res.render('index', babySteps);
});

app.get('/friends/:stepNum', function(req, res) {
    var targetFriends = _.where(babySteps.friends, {babyStep: parseInt(req.params.stepNum)});
    res.send(targetFriends);
});

app.listen('8080');
