function even_All(nums) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num % 2 === 0) {
      console.log(num + " is even");
    } else {
      console.log(num + " is odd");
      console.log("double the odd number: " + num * 2);
    }
  }
}

marks = [10, 20, 30, 40, 49, 70, 9, 80, 90, 100];
even_All(marks);
