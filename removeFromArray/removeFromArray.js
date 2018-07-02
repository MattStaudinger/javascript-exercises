var removeFromArray = function(arrayInput, arrayRemove) {

let test = arrayInput.indexOf(arrayRemove);

for (let i=1; i<=arguments.length; i++) {
	let arrayRemoveAll.push(arguments[i]);
}

while (arrayInput.includes(arrayRemoveAll)) {
	arrayInput.splice((arrayInput.indexOf(arrayRemove)),1);
}
return arrayInput;
}

module.exports = removeFromArray
