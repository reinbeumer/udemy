function meanMedianMode(arr) {
	var retVal = {};
	retVal['Mean'] = getMean(arr);
	retVal['Median'] = getMedian(arr);
	retVal['Mode'] = getMode(arr);
	return retVal;
}

function getMean(arr) {
	var sum = 0;
	var devider = 0;
	arr.forEach(num => {
		if (typeof (num) === 'number') {
			sum += num;
			devider++;
		}
	})
	if (devider === 0) {
		return 'NA';
	}
	return sum / devider;
}

function getMedian(arr) {
	arr.sort(function (a, b) {
		return a - b
	});
	var mid = arr.length / 2;
	if (arr.length % 2 > 0) {
		return arr[Math.floor(mid)];
	} else {
		var midLow = arr[mid];
		var midHigh = arr[(mid - 1)]
		if (typeof (midLow) !== 'number' || typeof (midHigh) !== 'number') {
			return midHigh + '<>' + midLow;
		}
		return (arr[mid] + arr[(mid - 1)]) / 2;
	}
}

function getMode(arr) {
	var tmpObj = {};
	arr.forEach(num => {
		if (tmpObj.hasOwnProperty(num)) {
			tmpObj[num]++
		} else {
			tmpObj[num] = 1;
		}
	})
	var keys = Object.keys(tmpObj);
	var highVal = 0;
	var highKey = [];
	var trueLength = 0;
	keys.forEach(key => {
		if (tmpObj[key] > highVal) {
			highKey = [key];
			highVal = tmpObj[key];
			trueLength++;
		} else if (tmpObj[key] === highVal) {
			highKey.push(key);
		}
	})
	if (highKey.length === keys.length) {
		return 'NA';
	} else {
		return highKey.toString();
	}
}

console.log(meanMedianMode(['a', 'b', 'c', 'd', 'd']));
console.log();