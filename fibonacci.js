window.onload = function() {

	function getFibPosition(number) {
		let fibArr = [0, 1];
		for(let i = 1; i <= number; i++) {
			fibArr.push(fibArr[i] + fibArr[i - 1]);

		}
		return fibArr[number];
	}

	console.log(getFibPosition(7));


}