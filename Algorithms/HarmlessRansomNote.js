function harmlessRansomNote(noteText, magazineText) {
	var noteArr = noteText.split(' ');
	var magazineArr = magazineText.split(' ');
	var magazineObj = {};
	var retval = 'Fit, all words match';
	magazineArr.forEach(magWord => {
		if (magazineObj[magWord]) {
			magazineObj[magWord]++;
		} else {
			magazineObj[magWord] = 1;
		}
	});
	noteArr.forEach(noteWord => {
		if (magazineObj[noteWord] && magazineObj[noteWord] > 0) {
			magazineObj[noteWord]--;
		} else {
			retval = 'No fit, word "' + noteWord + '" is not in the magazine (anymore)';
		}
	});
	return retval;
}

var bla = harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');
console.log(bla);
console.log();