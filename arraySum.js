
function addNumbers(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    sum = sum + num;
  }
  return sum;
}
var numbers = [1, 2, 3, 4, 5];
var sum = addNumbers(numbers);
console.log("The sum of the array is: " + sum);
