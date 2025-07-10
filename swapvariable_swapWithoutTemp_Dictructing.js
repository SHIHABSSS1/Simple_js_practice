var a = 5;
var b = 10;
console.log("Before swap: a =", a, ", b =", b);
var temp = a;
a = b;
b = temp;
console.log("After swap: a =", a, ", b =", b);

//without temp variable
var x = 15;
var y = 20;
console.log("Before swap: x =", x, ", y =", y);
x = x + y; // x now becomes 35
y = x - y; // y becomes 15 (35 - 20)
x = x - y; // x becomes 20 (35 - 15)
console.log("After swap: x =", x, ", y =", y);

// Using destructuring assignment
var p = 25;
var q = 30;
console.log("Before swap: p =", p, ", q =", q);
[p, q] = [q, p];
console.log("After swap: p =", p, ", q =", q);