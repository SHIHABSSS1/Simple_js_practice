function fibonacci(n){
    if (n == 0){
        return 0;
    }
    if (n == 1){
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
var n = 10;
var result = fibonacci(n);
console.log(`The ${n}th Fibonacci number is: ${result}`);