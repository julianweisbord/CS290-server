/*$.getScript("../CS290-client/booksell.html", function() {
	console.log("booksell.html connected to table");
});*/

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

mongoose.connect('mongodb://localhost/books');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
	var bookSchema = new mongoose.Schema({
		subject: string,
		course_number: Number,
		book_title : string,
  	author: string,
  	price: Number,
  	isbn: string,
  	book_condition: string,
  	description: string
	});

	var book = mongoose.model('book',bookSchema);

	var listing = new book({
		subject: document.getElementById("subject").value;
		course_number: document.getElementById("coursenum").value;
		book_title: document.getElementById("booktitle").value;
		author: document.getElementById("author").value;
		price: document.getElementById("price").value;
		isbn: document.getElementById("isbn").value;
		if (document.getElementById("condition").value == 4) book_condition: "Excellent";
		if (document.getElementById("condition").value == 3) book_condition: "Good";
		if (document.getElementById("condition").value == 2) book_condition: "Fair";
		if (document.getElementById("condition").value == 1) book_condition: "Poor";
		description: document.getElementById("description").value;
	})

	listing.save(function (err) {
		if (err) return console.error(err);
	})
});
