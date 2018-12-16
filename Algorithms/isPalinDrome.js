function isPalindrome(string) {
	string = string.toLowerCase();
	var stringArr = string.split('');
	var valChar = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var validStringArr = [];
	stringArr.forEach(function (char) {
		if (valChar.indexOf(char) > -1) {
			validStringArr.push(char);
		}
	});
	return validStringArr.join() === validStringArr.reverse().join();
}

console.log(isPalindrome('meetsysteem'));