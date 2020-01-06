var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/catt_app", { useNewUrlParser: true, useUnifiedTopology: true });

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

var george = new Cat({
	name: "George",
	age: 11,
	temperament: "Grouchy"
});

george.save(function (err, cat) {
	if (err) {
		console.log("somthing went wronge");
		console.log(err);
	} else {
		console.log("we just saved the cat to the database");
		console.log(cat);
	}
});

Cat.find({}, (err,cats) => {
	if (err) {
		console.log("somthing went wronge");
		console.log(err);
	} else {
		console.log("we just retrieved a cat to the database");
		console.log(cats);
	}
});

george.s

