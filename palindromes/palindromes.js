var palindromes = function(str) {

let strNewArr = []
let strInput = str.toLowerCase();
let strOriginalArr = strInput.split("");


//Original String transformed to a string without puncuation or special chars
for (let x=0; x < strInput.length; x++) {
  if (strOriginalArr[x] == " " || strOriginalArr[x] == "." || strOriginalArr[x] == "!"|| strOriginalArr[x] == "?" || strOriginalArr[x] == '"' || strOriginalArr[x] == ',') {
    strOriginalArr[x] = "";
  }
}

for (let i = 0; i < strOriginalArr.length; i++) {
  strNewArr.unshift(strOriginalArr[i]);
}

return (strOriginalArr.join("") == strNewArr.join("")) 

}

module.exports = palindromes
