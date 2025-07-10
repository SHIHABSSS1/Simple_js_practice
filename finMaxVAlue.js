var a = 100;
var b = 390;
var c = 500;

var maxValue = Math.max(a, b, c);
var maxVariable = "";
if (maxValue === a) {
  maxVariable = "a";
} else if (maxValue === b) {
  maxVariable = "b";
} else if (maxValue === c) {
  maxVariable = "c";
}
console.log("Maximum value is " + maxValue + " and it is stored in variable " + maxVariable);
