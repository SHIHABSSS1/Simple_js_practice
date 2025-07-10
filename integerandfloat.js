var num1 = 12;
var num2 = '3.14';
num2 = parseFloat(num2); // Convert string to float (method 1)
num2 = +num2; // Ensure num2 is a number (method 2)
console.log(num1+num2); 


var num3 = 0.1;
var num4 = 0.2;
var total = num3 + num4;
console.log(total); // This will log 0.30000000000000004 due to floating-point precision issues
total = total.toFixed(2); // Convert to string with 2 decimal places
console.log(total); // This will log "0.30"


