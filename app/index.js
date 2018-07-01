var express = require('express');
var babySteps = require('./baby-steps.json');
var exphbs  = require('express-handlebars');

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
  res.render('index', babySteps);
});

app.listen('8080');
