module.exports = function reverse (n) {
	let arrNumber = String(Math.abs(n)).split('');
	let a 
	for (i = 0; i <= arrNumber.length - 1; i++){
	    a = arrNumber[0];
	    for (j = 1; j <= arrNumber.length - 1 - i; j++){
	        arrNumber[j - 1] = arrNumber[j];
	    }
	    arrNumber[arrNumber.length - 1 - i] = a;
	}
	return parseInt(arrNumber.join(''))
 }
