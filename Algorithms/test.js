function generatorFactory(array) {
	let i = 0;
	return function generator() {
		if (i < array.length) {
			let value = array[i];
			i += 1;
			return value;
		}
	};
}
function callbackFirst(callback, ...args) {
	return callback(args);
}
let arr = [1, 2, 3];
let c = callbackFirst(generatorFactory, 1, 2, 3);
callbackFirst(a => console.log(a), c(), c());
console.log(c());
console.log(c());
console.log(c());
console.log(c.length);
