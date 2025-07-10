function doubleIt(number){

    var result = number * 2
    console.log(result)
}

doubleIt(5);
doubleIt(50);


//example2
function doubleIt(num){

    var result = num * 2
    return result;
}

var first = doubleIt(5);
var second = doubleIt(2);
console.log("the first and second number is: " + first + ", " + second);
var total = first + second;
console.log("The total number is "+total);


//example3
function add(num1, num2){
    var result = num1 + num2;
    return result;
}
var sum1 = add(5, 7);
var sum2 = add(10, 20);
console.log("The first sum is: " + sum1);
console.log("The second sum is: " + sum2);
var totalSum = sum1 + sum2;
console.log("The total sum is: " + totalSum);