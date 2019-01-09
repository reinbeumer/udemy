function fibMemo(index, cache, caller) {
	cache = cache || [];
	console.log(index + ' ' + caller + ' -> ' + cache.toString());
	if (cache[index]) {
		return cache[index];
	} else {
		if (index < 3) {
			return 1;
		} else {
			cache[index] = fibMemo(index - 1, cache, 'eerste') + fibMemo(index - 2, cache, 'tweede');
		}
	}
	return cache[index];
}
console.log(fibMemo(9));