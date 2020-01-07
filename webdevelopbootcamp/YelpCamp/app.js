require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const favicon = require('serve-favicon');

app.use(express.static('public'));
app.use(favicon(__dirname + '/public/favicon.ico'));

// mongoose.connect('mongodb://yelp-camp:CKzSF31TmJzKbt0iDsATDphYjvU1Vyw7IIQ5PfwLQfGombLU7ZJhEx3OOSFS45vcvEkU2SVrEqxeykXFBWbpLg%3D%3D@yelp-camp.documents.azure.com:10255/?ssl=true', {
mongoose.connect('mongodb+srv://yelpcamp:vTkkOBObezgj7laS@cluster0-fcbmk.azure.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const campgroundsSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
});
const Campground = mongoose.model('Campground', campgroundsSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('landing');
});

app.get('/campgrounds', (req, res) => {
	Campground.find({}, (err, allCampgrounds) => {
		if (err) {
			console.log('An error occured');
			console.log(err);
		} else {
			res.render('index', { campgrounds: allCampgrounds });
		}
	});
});

app.post('/campgrounds', (req, res) => {
	let name = req.body.name;
	let image = req.body.image;
	let description = req.body.description;
	let newCapground = { name: name, image: image, description: description };
	Campground.create(newCapground, (err, campground) => {
		if (err) {
			console.log('An error occured');
			console.log(err);
		} else {
			console.log('Creating campground');
			console.log(campground);
			res.redirect('/campgrounds');
		}
	});
});

app.get('/campgrounds/new', (req, res) => {
	res.render('new.ejs');
});

app.get('/campgrounds/:id', (req, res) => {
	Campground.findById(req.params.id, (err, foundCampground) => {
		if (err) {
			console.log('An error occured');
			console.log(err);
		} else {
			res.render('show', { campground: foundCampground });
		}
	});
});
app.listen(process.env.PORT,() => {
	console.log(
		`Yelpcamp server has started`
	);
});
