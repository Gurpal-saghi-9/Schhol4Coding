/*
For...In:- The for...in loop in JavaScript is used to iterate over the keys (property names) of an object.
Syntax:
for (let key in object) {
  // use key and object[key]
}
*/

let user = {
  name: "Guru",
  age: 22,
  city: "Sirhind"
};

for (let key in user) {
  console.log(key + ":", user[key]);
}

// Print All Keys of an Object
let car = { brand: "BMW", model: "X5", year: 2022 };

for (let key in car) {
  console.log(key);  // Output: brand, model, year
}

// Print All Keys and Values of an Object
let student = { name: "Guru", age: 22, course: "BCA" };

for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}

// Count Number of Properties in an Object
let phone = { brand: "Samsung", color: "Black", price: 30000 };
let count = 0;

for (let key in phone) {
  count++;
}

console.log("Total properties:", count); // Output: 3

// Create a New Object with Modified Values
let person = { name: "guru", city: "amritsar" };
let upperCasePerson = {};

for (let key in person) {
  upperCasePerson[key] = person[key].toUpperCase();
}

console.log(upperCasePerson); // Output: { name: "GURU", city: "AMRITSAR" }

// Check if a Key Exists in an Object
user = { name: "Guru", age: 22 };

let found = false;
for (let key in user) {
  if (key === "email") {
    found = true;
    break;
  }
}

console.log(found ? "Key exists" : "Key does not exist"); // Output: Key does not exist
