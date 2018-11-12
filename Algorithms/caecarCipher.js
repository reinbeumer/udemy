function caecarCipher(str, num) {
	num = num % 26;
	var alphabeth = 'abcdefghijklmnopqrstuvwxyz';
	var alphabethArrLower = alphabeth.toLowerCase().split('');
	var alphabethArrUpper = alphabeth.toUpperCase().split('');
	var retVal = '';
	str.split('').forEach(char => {
		if (alphabethArrLower.indexOf(char) > -1) {
			retVal += shift(alphabethArrLower, num, char);
		} else if (alphabethArrUpper.indexOf(char) > -1) {
			retVal += shift(alphabethArrUpper, num, char);
		} else {
			retVal += char;
		}
	});
	return retVal;

	function shift(arr, num, char) {
		var shift = arr.indexOf(char) + num;
		if (shift > 25) {
			shift = shift - 26;
		} else if (shift < 0) {
			shift = shift + 26;
		}
		return arr[shift];
	}
};


console.log(caecarCipher("Zoo Keeper", -885));