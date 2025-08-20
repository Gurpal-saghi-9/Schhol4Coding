/*
Arrow Function :- An arrow function is a shorter way to write function expressions using => syntax introduced in ES6.

Syntax:
const functionName = (parameters) => {
  // function body
};

*/

const greet = () => {
  console.log("Hello");
};

greet(); 

// One-liner Arrow Function
const square = (n) => n * n;
console.log(square(5));  

// No Parameters:
const sayHello = () => console.log("Hello!");
sayHello(); 

// One Parameter (no brackets needed):
const double = x => x * 2;
console.log(double(4));  

//  With return & multiple lines:
const sum = (a, b) => {
  let result = a + b;
  return result;
};
console.log(sum(4,6));


// Check if a Number is Even
const isEven = num => num % 2 === 0;

console.log(isEven(8));  // Output: true
console.log(isEven(3));  // Output: false


// Convert Minutes to Seconds
const toSeconds = mins => mins * 60;

console.log(toSeconds(5));  // Output: 300
