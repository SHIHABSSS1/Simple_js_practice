function fibonacci(n) {
  var fibo = [0, 1];
  for (var i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
var n = 11; // Change this value to generate more Fibonacci numbers
var result = fibonacci(n);
console.log(`The first ${n} Fibonacci numbers are: ${result}`);