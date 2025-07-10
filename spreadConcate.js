const age = [2, 4, 5, 6, 7, 8, 9, 10];
const age2 = [11, 12, 13, 14, 15, 16, 17, 18];
const allAges = age.concat(age2);
console.log(allAges);

//method 2 spread operator

const ages1 = [20, 21, 22, 23, 24, 25, 26, 27];
const ages2 = [28, 29, 30, 31, 32, 33, 34, 35];
const allAges1 = [...ages1, 5, ...ages2];
console.log(allAges1);

//math.max or min with spread operator
const numbers = [10, 20, 30, 40, 50];
const maxNumber = Math.max(...numbers);
console.log(`the maximum value is : ${maxNumber}`);
const minNumber = Math.min(...numbers);
console.log(`The minimum value is : ${minNumber}`);