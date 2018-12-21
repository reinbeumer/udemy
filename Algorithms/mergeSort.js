function megeSort(arr) {
	var newArr = [];
	arr.forEach(function (num) {
		newArr.push([num]);
	});
	while (newArr.length > 1) {
		var tmpArr = [];
		for (var i = 0; i < newArr.length; i = i + 2) {
			if (i + 1 === newArr.length) {
				var result = newArr[i];
			} else {
				result = merge(newArr[i], newArr[i + 1]);
			}
			tmpArr.push(result);
		}
		newArr = tmpArr.splice(0);
	}
	return newArr;
}

function merge(arr1, arr2) {
	var retVal = [];
	while (arr1.length > 0 || arr2.length > 0) {
		if (arr1.length === 0) {
			retVal.push(arr2[0]);
			arr2.shift();
		} else if (arr2.length === 0) {
			retVal.push(arr1[0]);
			arr1.shift();
		} else if (arr1[0] < arr2[0]) {
			retVal.push(arr1[0]);
			arr1.shift();
		} else {
			retVal.push(arr2[0]);
			arr2.shift();
		}
	}
	return retVal;
}
console.log(megeSort([11, 7, 4, 1, 15, 12, 3, 5, 6, 7, 8, 9, 22, 33, 44, 55, 66, 77, 88]));
console.log('klaar');