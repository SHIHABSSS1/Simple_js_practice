function add(num1, num2){
    if (num2 === undefined) {
        num2 = 0; // Default value for num2
    }
    return num1 + num2;
}
const result = add(5);
console.log(result); 

//2nd method
function add2(num1, num2){
    num2 = num2 || 0; // Default value for num2
    return num1 + num2;
}
const result2 = add2(10);
console.log(result2); 