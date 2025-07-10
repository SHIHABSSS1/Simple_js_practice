function isLeapYear(year) {
  if (typeof year !== 'number' || year < 0) {
    throw new Error('Input must be a non-negative integer');
  }
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
// Example usage:
try {
  console.log(isLeapYear(2020)); // true
  console.log(isLeapYear(1900)); // false
  console.log(isLeapYear(2000)); // true
  console.log(isLeapYear(2021)); // false
} catch (error) {
  console.error(error.message);
}