var fibonacci = function(index) {

let i = 0
let sum = [];

if (index < 0) {return "OOPS"}

while (i < index) {
	if (i<=1) {sum[i] = 1
	} else  {
	sum[i] = sum[i-1] + sum[i-2]
	}
	i++;
}
return sum[index-1];
}

module.exports = fibonacci
