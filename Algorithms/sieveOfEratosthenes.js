function sieveOfEratosthenes(num) {
	var primeArr = [];
	for (var i = 0; i <= num; i++) {
		primeArr[i] = true;
	}

	primeArr[0] = false;
	primeArr[1] = false;
	var maxLoopNum = Math.sqrt(num);
	var retvalArr = [];
	for (let i = 2; i <= maxLoopNum; i++) {
		var index = i + i;
		while (index <= num) {
			primeArr[index] = false;
			index += i;
		}
	}
	for (let i = 0; i < primeArr.length; i++) {
		if (primeArr[i]) {
			retvalArr.push(i);
		}

	}
	return retvalArr.length;
}

function sieveOfEratosthenes2(n) {
	var primes = [];
	for (var i = 0; i <= n; i++) {
		primes[i] = 1;
	}

	primes[0] = 0;
	primes[1] = 0;

	for (var i = 2; i <= Math.sqrt(n); i++) {
		for (j = 2; i * j <= n; j++) {
			primes[i * j] = 0;
		}
	}

	var result = [];
	for (var i = 0; i < primes.length; i++) {
		if (primes[i]) result.push(i);
	}

	return result.length;
}

function sieveOfEratosthenes3(num) {
	var captured = [];
	captured[0] = 0;
	captured[1] = 0;
	var maxLoopNum = Math.sqrt(num);
	for (var i = 2; i <= maxLoopNum; i++) {
		var index = i + i;
		while (index < num) {
			// if (!captured[index]) {
			captured[index] = 0;
			// }
			index += i;
		}
	}

	return num - Object.keys(captured).length;
}
var number = 10000000;
var start1 = Date.now();
console.log(sieveOfEratosthenes(number));
var millis1 = Date.now() - start1;
console.log(millis1/1000);
var start2 = Date.now();
console.log(sieveOfEratosthenes2(number));
var millis2 = Date.now() - start2;
console.log(millis2/1000);
var start3 = Date.now();
console.log(sieveOfEratosthenes3(number));
var millis3 = Date.now() - start3;
console.log(millis3/1000);