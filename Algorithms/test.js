function fibonacci(num) {
	if (num < 3) {
		return 1;
	} else {
		return fibonacci(num - 1) + fibonacci(num - 2);
	}
}

console.log(fibonacci(9));
console.log('DONE!');