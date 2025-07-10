//declare function
function doubleIt(num){
    return num * 2;
}
const result = doubleIt(5);
console.log(result);

//declare function method 2

const trippleIt = function(num){
    return num * 3;
}
const result2 = trippleIt(5);
console.log(result2);

//arrow function
const quadrupleIt = (num) => num * 4;
const result3 = quadrupleIt(5);
console.log(result3);

//more example of arrow function
const add = (x, y) => x + y;
const sum = add(10, 20);
console.log(sum);

//arrow function with multiple parameters
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const diff = x - y - z;
    const result = sum * diff;
    return result;
}
const mathResult = doMath(10, 5, 2);
console.log(mathResult);