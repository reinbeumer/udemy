function getMedian(arr) {
	arr.sort(function (a, b) {
		return a - b;
	});
	var mid = arr.length / 2;
	if (arr.length % 2 > 0) {
		return arr[Math.floor(mid)];
	} else {
		var midLow = arr[mid];
		var midHigh = arr[(mid - 1)];
		if (typeof (midLow) !== 'number' || typeof (midHigh) !== 'number') {
			return midHigh + '<>' + midLow;
		}
		return (arr[mid] + arr[(mid - 1)]) / 2;
	}
}