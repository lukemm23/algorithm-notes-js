// polymorphism
// inheritance
//parent class
class Animal {
  constructor(name) {
    this.name = name;
  }
  eats() {
    console.log(`${this.name} eats food`);
  }
}

// child class of parent class Animals
class Alligator extends Animal {
  // polymorphing eats method:
  // Alligator class inherits Animal class
  constructor(name) {
    super(name);
  }
  eats() {
    // super.eats();
    console.log(`${this.name} eats fishes`);
  }
}

// eats method polymorphed
let allie = new Alligator('allie');
eddie.eats();

let fido = new Animal('fido');
fido.eats();

// abstraction

function Employee(name, age, baseSalary) {
  this.name = name;
  this.age = age;
  this.baseSalry = baseSalary;

  //monthlyBonus and calculateFinalSalary is not exposed to the user.
  let monthlyBonus = 1000;

  let calculateFinalSalary = function () {
    let finalSalary = baseSalary + monthlyBonus;
    console.log(`finalSalary is: ${finalSalary}`);
  };

  this.getEmployeeDetails = function () {
    console.log(`Name: ${this.name} | Age: ${this.age}`);
    calculateFinalSalary();
  };
}

let emp1 = new Employee('john', 30, 2000);
emp1.getEmployeeDetails();
emp1.calculateFinalSalary();
console.log(emp1.monthlyBonus);

// encapsulation
class Employee {
  setEmpDetails(name, id, phone) {
    this.name = name;
    this.id = id;
    this.phone = phone;
  }
  getEmpName() {
    return this.name;
  }
  getEmpId() {
    return this.id;
  }
  getEmpPhone() {
    return this.phone;
  }
}

let emp1 = new Employee();

emp1.setEmpDetails('john', 1, 1111111111);
console.log(emp1.getEmpName());
console.log(emp1.getEmpId());
console.log(emp1.getEmpPhone());
