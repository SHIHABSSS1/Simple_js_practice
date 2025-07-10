class student {
  constructor(studentName, studentAge) {
    this.name = studentName;
    this.age = studentAge;
    this.shcool = "Buet Mekanik School";
  }
}
const student1 = new student(1, "Siam");
const student2 = new student(2, "Shihab");
const student3 = new student(3, "Shishir");
const student4 = new student(4, "safwan");
const student5 = new student(5, "shayib");
console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);

console.log(student1.name);
console.log(student1.age);
console.log(student1.shcool);