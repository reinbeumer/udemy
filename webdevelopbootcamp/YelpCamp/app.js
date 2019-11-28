require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('landing');
});

app.get('/campgrounds', (req, res) => {
	let campgrounds = [
		{
			name: 'Salmo Creek',
			image:
				'https://www.photosforclass.com/download/pixabay-691424?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F50e9d4474856b108f5d084609620367d1c3ed9e04e50744e762973d1944ec5_960.jpg&user=Free-Photos'
		},
		{
			name: 'Mountain Goats Rest',
			image:
				'https://www.photosforclass.com/download/pixabay-4522970?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F52e5d7414355ac14f6da8c7dda793f7f1636dfe2564c704c722c7ddc924ec658_960.jpg&user=Ben_Frieden'
		},
		{
			name: 'Granite Hill',
			image:
				'https://www.photosforclass.com/download/pixabay-1031141?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e0d6424b56ad14f6da8c7dda793f7f1636dfe2564c704c722c7ddc924ec658_960.jpg&user=Free-Photos'
		}
	];
	res.render('campgrounds', { campgrounds: campgrounds });
});

app.listen(process.env.PORT, process.env.IP, () => {
	console.log(
		`Yelpcamp server has started at http://${process.env.IP}:${process.env.PORT}`
	);
});
