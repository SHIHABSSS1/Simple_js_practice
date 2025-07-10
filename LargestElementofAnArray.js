var marks = [40, 50, 60, 70, 80, 90, 100];
var largest = marks[0];
for (var i = 1; i < marks.length; i++) {
    if (marks[i] > largest) {
        largest = marks[i];
    }
}
console.log("Largest element in the array is: " + largest);