/* Function Declaration :- A normal function (also called a function declaration) is a standard way to define reusable code using the function keyword.
Syntax:
function functionName(parameters) {
  // code to execute
}
*/

function sayHello() {
  console.log("Hello, Guru!");
}

sayHello();  // Output: Hello, Guru!


function add(a, b) {
  return a + b;
}

console.log(add(10, 5));  // Output: 15


// Hoisting Example :-  Works! — Because normal functions are hoisted to the top of their scope.
greet(); // Output: Hello!

function greet() {
  console.log("Hello!");
}
