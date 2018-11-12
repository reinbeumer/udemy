function reverseWords(string) {
	var stringArr = string.split(' ');
	var revertStringArr = [];
	stringArr.forEach(word => {
		var revWrd = '';
		for (var i = str.length - 1; i >= 0; i--) {
			revWrd += str[i];
		}
		revertStringArr.push(revWrd);
	})
	return revertStringArr.join(' ');
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog'));