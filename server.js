var express = require('express');
var app = express();

app.use(express.static('static'));
app.listen(process.env.PORT || 8080);

var path = require('path');
var mongoose = require('mongoose');

var app = express();

//all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongods://localhost');

var Schema = new mongoose.Schema({
	subject: string,
	course_number: Number,
	book_title : string,
  author: string,
  price: Number,
  isbn: string,
  book_condition: string,
  description: string
});

	var user = mongoose.model('emp',Schema);
