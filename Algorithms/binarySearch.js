function binarySearch(numArr, key) {
	var middleIndex = Math.floor(numArr.length / 2);
	var middlElem = numArr[middleIndex];

	//base case
	if (middlElem === key) {
		return true;
	} else if (middlElem < key && numArr.length > 1) {
		return binarySearch(numArr.splice(middleIndex, numArr.length), key);
	} else if (middlElem > key && numArr.length > 1) {
		return binarySearch(numArr.splice(0, middleIndex), key);
	} else {
		return false;
	}
}
var num = 56;
var arr = [5, 7, 12, 16, 36, 39, 42, 56, 71];
// console.log(binarySearch(arr, num));

console.log(arr.indexOf(num) > -1);