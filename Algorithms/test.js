function twoSum(numArr, sum) {
	var retVal = [];
	for (var i = numArr.length - 1; i >= 0; i--) {
		var basis = numArr[i];
		// console.log('basis= ' + basis);
		for (var j = i - 1; j >= 0; j--) {
			var basisMinEen = numArr[j];
			// console.log('basisMinEen= ' + basisMinEen);
			if (basis + basisMinEen === sum) {
				var uitkomst = [];
				uitkomst.push(basis);
				uitkomst.push(basisMinEen);
				retVal.unshift(uitkomst);
			}
		}

	}
	return retVal;
}

// console.log(twoSum([1, 6, 4, 5, 3, 3], 7));
console.log(twoSum([0, 0, 1, 1, 2, 2, 3, 3, 4, 4, -2, 5, 6, 2, 3, 4, 5, 6, 8, 9, 5, 6, 7, 8, 9, 0, 3, 8, 7, 6, 5, 4, 3], 4));
console.log('klaar');