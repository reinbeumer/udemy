function isPalindrome(string) {
	var string = string.toLowerCase();
	var stringArr = string.split('');
	var valChar = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var validStringArr = [];
	stringArr.forEach(char => {
		if (valChar.indexOf(char) > -1) {
			validStringArr.push(char);
		}
	});
	if (validStringArr.join() === validStringArr.reverse().join()) {
		return true;
	} else {
		return false;
	}
}

console.log(isPalindrome("Madam I'm Adam"));
