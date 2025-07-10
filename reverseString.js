function reverseString(str) {
    var reverse = "";
    for (var i = 0; i < str.length; i++) {
        var char =  str[i];
        reverse = char + reverse;
    }
    return reverse;
}
// Example usage:
var statement = 'Hello, World!';
var reversed = reverseString(statement);
console.log(reversed); // Output: !dlroW ,olleH