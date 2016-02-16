var express = require('express');
var app = express();

app.use(express.static('static'));
app.listen(process.env.PORT || 8080);

app.use(express.bodyParser());

var path = require('path');
var mongoose = require('mongoose');

var app = express();

//all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongods://localhost/Company');

var Schema = new mongoose.Schema({
	_id : string,
	name: string,
	age : Number
});

	var user = mongoose.model('emp',Schema);
