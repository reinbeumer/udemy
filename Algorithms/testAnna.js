function reverseWords(string) {
	var eachWord = string.split(' ');

	eachWord.forEach(function (word) {
		console.log(word);
	});

	for (var i = 0; i < eachWord.length; i++) {
		console.log(eachWord[i]);

	}

}

reverseWords('Anna Maria Beumer');