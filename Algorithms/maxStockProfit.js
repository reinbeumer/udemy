function maxStockProfit(arr) {
	let result = -1;
	if (arr.length < 2) {
		return result;
	}
	let buyPrice = arr[0];
	let sellPrice = arr[1];
	for (let i = 2; i < arr.length - 1; i++) {
		let firstPrice = arr[i];
		let nextPrice = arr[i + 1];
		let diff = firstPrice - nextPrice;
		if (firstPrice < buyPrice) {
			buyPrice = firstPrice;
			// sellPrice = nextPrice;
		}
		if (nextPrice > sellPrice) {
			sellPrice = nextPrice;
		}
	}

	if (sellPrice - buyPrice >= 0) {
		result = sellPrice - buyPrice;
	}
	return (
		'buyPrice: ' +
		buyPrice +
		'\nsellPrice: ' +
		sellPrice +
		'\nresult: ' +
		result
	);
}
console.log(maxStockProfit([20, 15, 38, 14, 20]));