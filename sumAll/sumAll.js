var sumAll = function(startNum, endNum) {
	let sum = 0;
	let tempStartNum;
	if (startNum > endNum) {
	tempStartNum = endNum;
	endNum = startNum;
	startNum = tempStartNum;
} else if (startNum == endNum) {
	return sum = startNum;
	} else if (startNum < 0 || endNum < 0 || typeof (startNum) != "number" || typeof (endNum) != "number") {
		return "ERROR";
	} 

	for (let i=startNum; i <= endNum; i++) {
		sum += i;
	}
	return sum;
}

module.exports = sumAll


/*

sumAll (Anfangswert, Endwert)

for (i=Anfangswert, i<=Endwert, i++)
sum = sum + i;


return sum;


*/