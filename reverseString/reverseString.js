


let reverseString = function(reverseInput) {

let i = 0;
let reverseWordsArray = [];
while (i < reverseInput.length) {
	reverseWordsArray.unshift (reverseInput.substr(i,1));
	i++;
}
return reverseWordsArray.join(""); 
}

module.exports = reverseString