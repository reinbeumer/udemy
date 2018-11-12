function caecarCipher(str, num) {
	num = num % 26;
	var alphabethArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var retVal = '';
	var lowCaseStr = str.toLowerCase().split('');
	for (var i = 0; i < lowCaseStr.length; i++) {
		var char = lowCaseStr[i];
		if (alphabethArr.indexOf(char) > -1) {
			var shift = i + num;
			if (shift > 25) {
				shift = shift - 26;
			} else if (shift < 0) {
				shift = shift + 26;
			}
			if (str[i] === char.toUpperCase()) {
				retVal += alphabethArr[shift].toUpperCase();
			} else {
				retVal += alphabethArr[shift]
			}
		} else {
			retVal += char;
		}
	};
	return retVal;
};

console.log(caecarCipher("abcdefghijklmnopqrstuvwxyz", -1000));