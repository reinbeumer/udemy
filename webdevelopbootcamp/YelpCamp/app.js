require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const favicon = require('serve-favicon');

app.use(express.static('public'));
app.use(favicon(__dirname + '/public/favicon.ico'));

mongoose.connect('mongodb://localhost:27017/yelp_camp', {
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
app.listen(process.env.PORT, process.env.IP, () => {
	console.log(
		`Yelpcamp server has started at http://${process.env.IP}:${process.env.PORT}`
	);
});
