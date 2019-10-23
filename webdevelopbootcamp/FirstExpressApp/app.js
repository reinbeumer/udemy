var express = require('express');
var app = express();

app.get('/', (req, res) => {
	res.send('Hi, there');
});
app.get('/test', (req, res) => {
	res.send('test');
	let a = { name: 'rein' };
	let b = ['no1', 'no2'];
	let c = { a: a, b: b };
	console.log(c);
	console.table(c);
	console.group();
	console.dir(c);
	console.groupEnd();
	console.dirxml(c);
});

app.get('/bye', (req, res) => {
	res.send('Goodby!!');
});

app.get('/dog', (req, res) => {
	res.send('MEOW!');
});

app.listen(3000, () => {
	console.table('server has started');
});
