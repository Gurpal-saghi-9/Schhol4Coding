/*
Constructor Function:- A constructor function is a special type of function used to create and initialize objects in JavaScript.

Syntax: 
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Creating Object:
const user1 = new Person("Guru", 22);
console.log(user1.name);  // Output: Guru
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new Person("Guru", 22);
console.log(user1.name);  // Output: Guru

// const obj = new Person("Guru", 22);

// // Behind the scenes:
// let obj = {};
// obj.__proto__ = Person.prototype;
// Person.call(obj, "Guru", 22);


// Add Method Inside Constructor:
function Car(name) {
  this.name = name;
  this.drive = function() {
    console.log(`${this.name} is driving`);
  };
}

const c1 = new Car("BMW");
c1.drive();  // Output: BMW is driving


// Add Method Using Prototype (Efficient way):
Car.prototype.honk = function() {
  console.log(`${this.name} says Honk!`);
};

c1.honk();  // Output: BMW says Honk!


// ❗ If You Don’t Use new:
const test = Person("Guru", 22); // ❌ `this` becomes undefined or `window` in strict mode
