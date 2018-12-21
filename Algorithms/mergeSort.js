function mergeSort(arr) {

	if (arr.length < 2) {
		return arr;
	}
	var mid = Math.floor(arr.length / 2);
	var first = arr.slice(0, mid);
	var second = arr.slice(mid);
	return merge(mergeSort(first), mergeSort(second));
	// var newArr = [];
	// arr.forEach(function (num) {
	// 	newArr.push([num]);
	// });
	// while (newArr.length > 1) {
	// 	var tmpArr = [];
	// 	for (var i = 0; i < newArr.length; i = i + 2) {
	// 		if (i + 1 === newArr.length) {
	// 			var result = newArr[i];
	// 		} else {
	// 			result = merge(newArr[i], newArr[i + 1]);
	// 		}
	// 		tmpArr.push(result);
	// 	}
	// 	newArr = [].concat(tmpArr);
	// }
	// return newArr;
}

function merge(arr1, arr2) {
	var retVal = [];
	while (arr1.length && arr2.length) {
		if (arr1[0] < arr2[0]) {
			retVal.push(arr1.shift());
		} else {
			retVal.push(arr2.shift());
		}
	}
	if (arr1.length) {
		retVal = retVal.concat(arr1);
	} else {
		retVal = retVal.concat(arr2);
	}
	return retVal;
}
console.log(mergeSort([11, 7, 4, 1, 15, 12, 3, 5, 6, 7, 8, 9, 22, 33, 44, 55, 66, 77, 88]));
console.log('klaar');