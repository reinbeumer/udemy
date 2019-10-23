var express = require('express');
var app = express();
var PORT = 3000;
var bodyParser = require('body-parser');
var friends = ['Tony', 'Miranda', 'Justin', 'Pierre', 'Lily'];

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('home');
});

app.post('/addfriend', function(req, res) {
	var newFriend = req.body.newfriend;
	friends.push(newFriend);
	res.redirect('/friends');
});

app.get('/friends', function(req, res) {
	res.render('friends', { friends: friends });
});

app.listen(PORT, function() {
	console.log('server has started at ' + PORT);
});
