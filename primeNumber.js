function isPrime(n){
    for (i = 2; i < n; i++){
        if (n % i == 0){
            return `Not a prime number`;
            break;
        }
        return `your number is a Prime number`;
    }
}

var number = 9;
var result = isPrime(number);
console.log(result); // Output: your number is a Prime number