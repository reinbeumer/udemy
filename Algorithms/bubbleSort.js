function bubbleSort(arr) {
	for (var i = arr.length; i > 0; i--) {
		for (var j = 0; j < i; j++) {
			if (arr[j] > arr[j + 1]) {
				var tmp = arr[j]
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}
	return arr;
}
var arr = [6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1];
console.log(bubbleSort(arr))