var student1 = {id: 1, name: "John Doe", age: 20};
var student2 = {id: 2, name: "Jane Smith", age: 22};
var student3 = {id: 3, name: "Alice Johnson", age: 19};

var names = student1.name + ", " + student2.name + ", " + student3.name;

console.log("Student 1:", student1);
console.log("Student 2:", student2);
console.log("Student 3:", student3);
console.log("Names of students:", names);

//CHANGE age of the first student
student1.age = 21;
console.log("Updated Student 1:", student1);

//updating names
student1.name = "Shihab Ahmed";
student2.name = "Siam Ahmed";
student3.name = "Sakib Ahmed";
console.log("Updated names of students:", student1.name, student2.name, student3.name);
console.log("Student 1:", student1);
console.log("Student 2:", student2);
console.log("Student 3:", student3);

