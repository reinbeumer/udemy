function reverseWords(string) {
	var stringArr = string.split(' ');
	var revertStringArr = [];
	stringArr.forEach(word => {
		revertStringArr.push(revertString(word));
	})
	return revertStringArr.join(' ');
}

function revertString(str) {
	var retval = '';
	for (var i = str.length - 1; i >= 0; i--) {
		retval += str[i];
	}
	return retval;
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog'));