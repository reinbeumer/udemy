function fibonacci(possition) {
	if (possition < 3) {
		return 1;
	} else {
		return fibonacci(possition - 1) + fibonacci(possition - 2);
	}
}

function fibonacci1(possition) {
	var retVal = 1;
	var prev = 0;
	for (var i = 1; i < possition; i++) {
		var tmp = retVal;
		retVal += prev;
		prev = tmp;
	}
	return retVal;
}

function fibonacci2(index, cache) {
	cache = cache || [];
	if (cache[index]) {
		return cache[index];
	} else {
		if (index < 3) {
			return 1;
		} else {
			cache[index] = fibonacci2(index - 1, cache) + fibonacci2(index - 2, cache);
		}
	}
	return cache[index];
}
console.log(fibonacci(1476));
var num = 5;
console.log(fibonacci2(num));
console.log(fibonacci1(num));
console.log(fibonacci(num));