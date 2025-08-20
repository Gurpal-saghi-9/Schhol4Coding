/* Function Expression:- A function expression is when a function (named or anonymous) is assigned to a variable.
Syntax:-
const variableName = function(parameters) {
  // function body
};
*/

let greet = function(name) {
  console.log("Hello, " + name);
};

greet("Gurpal"); // Output: Hello, Gurpal


greet = function sayHello(name) {
  console.log("Hello, " + name);
};

greet("Guru");     // Output: Hello, Guru
// sayHello("Guru"); // ❌ Error (not accessible outside)


/*
Why Use Function Expressions?
✅ Store functions in variables
✅ Pass functions as arguments (callback)
✅ Avoid polluting global scope
✅ Dynamic function creation
*/

/*
❌ Function Expression Is NOT Hoisted
greet(); // ❌ Error

const greet = function() {
  console.log("Hello");
};
*/

// Q1: Function Expression to Add Two Numbers
const add = function(a, b) {
  return a + b;
};
console.log(add(5, 3));  // Output: 8

// Function Expression to Check Even or Odd
const checkEven = function(num) {
  return num % 2 === 0 ? "Even" : "Odd";
};

console.log(checkEven(7));  // Output: Odd


// Function Expression to Convert Minutes to Seconds
const toSeconds = function(minutes) {
  return minutes * 60;
};

console.log(toSeconds(5));  // Output: 300


// Function Expression to Find Maximum of 3 Numbers
const findMax = function(a, b, c) {
  return Math.max(a, b, c);
};

console.log(findMax(4, 10, 7));  // Output: 10
