function fibonacci(position, caller) {
	console.log(position + ' ' + caller);
	if (position < 3) {
		return 1;
	} else {
		return fibonacci(position - 1, 'eerste') + fibonacci(position - 2, 'tweede');
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
// console.log(fibonacci1(1476));
var num = 9;
// console.log(fibonacci2(num));
// console.log(fibonacci1(num));
console.log(fibonacci(num));