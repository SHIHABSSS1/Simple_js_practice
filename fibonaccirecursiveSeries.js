function fibonacci(n) {
  if (n == 0) {
    return [0];
  }
  if (n == 1) {
    return [0, 1];
  } else {
    var fibo = fibonacci(n - 1);
    var nextValue = fibo[n - 1] + fibo[n - 2];
    fibo.push(nextValue);
    return fibo;
  }
}
var n = 5;
var result = fibonacci(n);
console.log(`The Fibonacci series up to ${n} is: ${result}`);