function factorial(num) {
	if (num === 1) {
		return num;
	} else {
		return num * factorial(num - 1);
	}
}


function factorial_2(num) {
	var retval = 1;
	for (var i = 1; i <= num; i++) {
		retval = retval * i;
	}
	return retval;
}
Number.prototype.toFixedSpecial = function (n) {
	var str = this.toFixed(n);
	if (str.indexOf('e+') < 0)
		return str;

	// if number is in scientific notation, pick (b)ase and (p)ower
	return str.replace('.', '').split('e+').reduce(function (p, b) {
		return p + Array(b - p.length + 2).join(0);
	}) + '.' + Array(n + 1).join(0);
};
var testNum = 170
console.log(factorial(testNum));
console.log(factorial_2(testNum).toFixed(20));