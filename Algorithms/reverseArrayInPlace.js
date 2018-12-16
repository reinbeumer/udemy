function reverseArrayInPlace(arr) {
	var j = arr.length - 1;
	for (var i = 0; i <= j; i++) {
		var tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
		j--;
	}
	return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6]));