var repeatString = function(repetitionWord,repetitions) {
	let repetitionWords = "";
	if (repetitions < 0) {
		return "ERROR";
	}
for (let i = 1; i <= repetitions; i++) {
 repetitionWords += repetitionWord;
}
return repetitionWords;
}

module.exports = repeatString
