var num = -5;
var absoluteNumber = Math.abs(num);
console.log("The Absolute Number is : "+absoluteNumber); 

//round

var num1 = 5.6;
var roundedNumber = Math.round(num1);  
console.log("The Round Number is : "+roundedNumber);

//ceil = jetai thakuk upore round kore dibe  
var num2 = 9.26;
var roundedNumber = Math.ceil(num2);  
console.log("The ceil Number is : "+roundedNumber);

//floor = jetai thakuk niche round kore dibe
var num3 = 9.26;
var roundedNumber = Math.floor(num3);  
console.log("The floor Number is : "+roundedNumber);

//rndom = 0 to 1 er modde random number generate kore
var randomNumber = Math.random()*100;
randomNumber = Math.round(randomNumber);
console.log("The Random Number Between 100 is : "+randomNumber);