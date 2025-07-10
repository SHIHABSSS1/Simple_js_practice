function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n - 1);
    }
}
var n =7;
var result = factorial(n);
console.log(`The factorial of ${n} is: ${result}`);