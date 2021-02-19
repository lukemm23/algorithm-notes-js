# ES2015 JS class syntax

### objectives

- explain what a class is
- understand how javascript implements the idea of classes
- define terms like abstraction, encapsulation, and polymorphism
- use ES2015 classes to implement data structures

### what is a class

- a blueprint for creating objects with pre-defined properties and methods, when created makes objects known as instances
- classes are created with the new keyword
- the constructor function is a special function that gets run when the class is instantiated
- instance methods can be added to classes similar to methods in objects
- class methods can be added using the static keyword

### why do we need to learn this

- we're going to implement data structures as classes

### Class example

```js
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
  }
}

let firstStudent = new Student('Luke', 'ma');
let secondStudent = new Student('someone', 'else');
```

- the method to create new Objects must be called constructor
- the class keyword creates a constant, so you can not redefine it.

### instance methods example

```js
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.scores = [];
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAvereage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }
}

let firstStudent = new Student('Luke', 'Ma');

firstStudent.fullName(); //Luke Ma
```

### class methods example - used as utility functions, not used for specific instance of the class.

```js
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  static enrollStudents(students) {
    return `ENROLLING STUDENTS!`;
  }
}

let firstStudent = new Student('Luke', 'ma');
let secondStudent = new Student('someone', 'else');

Student.enrollStudents([firstStudent, secondStudent]);
```

### how we'll be using classes

- we will be using the constructor and instance methods to define class
