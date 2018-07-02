var ftoc = function(degrees) {
    return Math.round(((degrees-32) / 1.8)*10)/10;

}

var ctof = function(degrees) {
  return Math.round((degrees * 1.8 + 32) *10)/10;
}

module.exports = {
  ftoc,
  ctof
}
