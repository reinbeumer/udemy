function sieveOfEratosthenes(num) {
	var primeArr = new Array(num).fill(false).fill(true, 2);
	var maxLoopNum = Math.ceil(Math.sqrt(num));
	var retvalArr = [];
	for (var i = 2; i < maxLoopNum; i++) {
		var index = i + i;
		while (index <= num) {
			primeArr[index] = false;
			index += i;
		}
	}
	for (var j = 0; j < primeArr.length; j++) {
		if (primeArr[j]) {
			retvalArr.push(j);
		}

	}
	return retvalArr;
}

console.log(sieveOfEratosthenes(2000000));