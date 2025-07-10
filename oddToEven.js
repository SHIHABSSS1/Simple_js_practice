function oddToEven(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i]);
    } else {
      result.push(numbers[i] * 2); 
    }
  }
  return result; 
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output = oddToEven(numbers);
console.log(numbers, " = ", output); 
