// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency === undefined || currency === 0 || currency < 0) {
    	return {};
    }else if (currency > 10000) {
    	return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }else{
    	const coins = [
		{
			label: "H",
			value: 50,
			count: 0
		},
		{
			label: "Q",
			value: 25,
			count: 0
		},
		{
			label: "D",
			value: 10,
			count: 0
		},
		{
			label: "N",
			value: 5,
			count: 0
		},
		{
			label: "P",
			value: 1,
			count: 0
		}
		];
		var value = currency;

    	result = {};
    	for (var i = 0; i < coins.length; i++) {
    		coins[i].count = Math.floor(value / coins[i].value);
    		value = value % coins[i].value;
    		if (coins[i].count !== 0) {
    			result[coins[i].label] = coins[i].count;
    		}
    	}
    	return result;
    }
}
