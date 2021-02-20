function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (array) {
	// computes the sum of an array, empty array, or array of length 1
	let result = 0;
	for (i = 0; i < array.length; i++) {
		result += array[i];
	}
	return result;
}

function multiply (array) {
	let result = 1;
	for (i = 0; i < array.length; i++) {
		result = result * array[i];
		// console.log(i);
		// console.log(result);
		// console.log(array[i]);
	}
	return result;
}

function power(number, exponent) {
	if (exponent == 0) {
		return 1;
	} else if (!exponent == 0) {
		return number * power(number, exponent - 1)
	}
}

function factorial(n) {
	return n <= 1 ? 1 : n * factorial(n - 1);
	
	// calculate the factorial
	// factorial of 0! = 1, 1! = 1 * 0! = 1, 2! = 2 * 1! * 0! = 2 * 1 * 1 = 2, 3! = 3 * 2! * 1! * 0! = 6
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}