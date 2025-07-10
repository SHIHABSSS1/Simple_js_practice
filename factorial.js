function factorial(n) {
  var fact = 1;
  for (var i = 1; i <= n; i++) {
    fact = fact * i;
  }
    return fact;
}

var n = 6; 
var result = factorial(n);
console.log(`The factorial of ${n} is: ` + result);