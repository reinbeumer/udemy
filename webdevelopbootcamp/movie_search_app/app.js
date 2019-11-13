require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const app = express();
const request = require('request');
app.set('view engine', 'ejs');

app.get('/results', (req, res) => {
	let search = req.query.search;
	request(
		`http://www.omdbapi.com/?apikey=${process.env.APIKEY}&s=${search}`,
		(error, response, body) => {
			if (!error && response.statusCode === 200) {
				let data = JSON.parse(body);
				// res.send(body);
				res.render('results', { data: data });
			}
		}
	);
});

app.get('/', (req, res) => {
	res.render('search');
});

app.listen(process.env.PORT, process.env.IP, () => {
	console.log(
		`Movie app has started at http://${process.env.IP}:${process.env.PORT}`
	);
});
