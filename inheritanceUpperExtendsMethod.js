class Parent {
  constructor() {
    this.fatherName = "Rahman";
  }
}

class Child extends Parent {
  constructor(name) {
    super(); // Call the constructor of the parent class
    this.name = name;
  }

  getFullname() {
    return `${this.name} ${this.fatherName}`;
  }
}

const baby = new Child("Shihab");
const baby2 = new Child("Shishir");
console.log(baby.getFullname());
console.log(baby2);
