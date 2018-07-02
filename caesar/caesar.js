let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var caesar = function(textInput, shift) {

let text = textInput;
let textChar;
let upperCase;
let caesarText = [];
text = text.toLowerCase();
textChar = text.split("");



for (let i = 0; i < text.length; i++) {

textInput.charCodeAt(i) < 97 ? upperCase = true : upperCase = false;

if (!(alphabet.includes(textChar[i]))) {
  caesarText.push (textChar[i])
  continue;
}



textChar[i] = alphabet[shiftNum(alphabet.indexOf(textChar[i]) + shift)];

if (upperCase) textChar[i] = textChar[i].toUpperCase();
caesarText.push (textChar[i]);

}

return caesarText.join("");
}



function shiftNum (num) {

  if (num < 0) num = alphabet.length + num;
  else if (num > alphabet.length - 1) {
    while (num > alphabet.length - 1) {
      num = num - alphabet.length;
    }
  }
return num;
}
console.log(caesar("Geheimsprache", 72));

module.exports = caesar
