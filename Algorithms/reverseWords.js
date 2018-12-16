function reverseWords(string) {
	var stringArr = string.split(' ');
	var revertStringArr = [];
	stringArr.forEach(word => {
		var revWrd = '';
		for (var i = word.length - 1; i >= 0; i--) {
			revWrd += word[i];
		}
		revertStringArr.push(revWrd);
	});
	return revertStringArr.join(' ');
}

// console.log(reverseWords('The quick brown fox jumps over the lazy dog'));
console.log(reverseWords('Coding Javascript'));