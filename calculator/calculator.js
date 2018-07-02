function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;

}

function sum (sumArr) {
	let sum = 0;
	for (let i = 0; i<sumArr.length; i++) {
		sum += sumArr[i]
	}
	return sum;

}

function multiply (multiArr) {
	let multi = 1;
	for (let i = 0; i<multiArr.length; i++) {
		multi *= multiArr[i]
	}
	return multi;
}

function power(num, pow) {
	return Math.pow(num, pow);
	/*let power = 1;
	for (let j=1; j<= pow; j++) {
		power *= num;
	}
	return power; 
	*/
}

function factorial(num) {
	let factorNum = 1;
	while (num > 0) {
		factorNum *= num;
		num--;
	}
	return factorNum;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}