function factorial(n) {
  var i = 1;
  var fact = 1;
  while (i <= n) {
    fact = fact * i;
    i++;
  }
  return fact;
}

var n = 4;
var result = factorial(n);
console.log(`The factorial of ${n} is: ${result}`);