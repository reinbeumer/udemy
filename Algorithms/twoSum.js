function twoSum(numArr, sum) {
	var retVal = [];
	var usedNum = [];
	for (var i = 0; i < numArr.length; i++) {
		var num = numArr[i];
		var leftOver = sum - num;
		if (usedNum.indexOf(leftOver) > -1) {
			retVal.push([num, leftOver]);
		}
		usedNum.push(num);
	}
	return retVal;
}
console.log(twoSum([0, 0, 1, 1, 2, 2, 3, 3, 4, 4, -2, 5, 6, 2, 3, 4, 5, 6, 8, 9, 5, 6, 7, 8, 9, 0, 3, 8, 7, 6, 5, 4, 3], 4));
// console.log(twoSum([1, 6, 4, 5, 3, 3], 7));
console.log();