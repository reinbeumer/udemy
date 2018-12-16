function FizzBuzz(end, start, fizz, buzz) {
	if (!start || isNaN(start)) start = 1;
	if (!end || isNaN(end)) end = 20;
	if (!fizz || isNaN(fizz)) fizz = 3;
	if (!buzz || isNaN(buzz)) buzz = 5;
	for (var i = start; i <= end; i++) {
		var retVal = i + '-> ';
		var fizzbuzz = '';
		if (i % fizz === 0) {
			fizzbuzz = 'Fizz';
		}
		if (i % buzz === 0) {
			fizzbuzz += 'Buzz';
		}
		if (fizzbuzz) {
			console.log(retVal, fizzbuzz);
		} else {
			console.log(retVal, i);
		}

	}
}

FizzBuzz(20);