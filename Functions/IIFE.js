/*
IIFE(Immediately Invoked Function Expression):-  An IIFE is a function in JavaScript that runs immediately after it is defined, without being called explicitly.

Syntax:-
(function() {
  // code block
})();

*/

(function() {
  console.log("IIFE executed!");
})();

// ----------------------------------------------------------------

// Arrow Function IIFE
(() => {
    console.log("Arrow IIFE called");
})();

// ----------------------------------------------------------------

// Example with Private Variables:
(function() {
    let secret = "Hidden from outside!";
    console.log("Inside IIFE: " + secret);
})();

// console.log(secret); // ❌ Error: secret is not defined

// ----------------------------------------------------------------

// Named IIFE (Rare):
(function greet() {
    console.log("Hello from named IIFE");
})();

// ----------------------------------------------------------------

// IIFE That Adds Two Numbers
(function() {
    let a = 10, b = 5;
    console.log("Sum:", a + b);
})();

// ----------------------------------------------------------------

// IIFE with Parameters
(function(x, y) {
    console.log("Product:", x * y);
})(4, 6);  // Output: Product: 24

// ----------------------------------------------------------------

// Real Use Case:
// IIFE That Returns a Function
let count = (function() {
    let c = 0;
    return function() {
        c++;
        return c;
    };
})();

console.log(count()); // 1
console.log(count()); // 2
// ----------------------------------------------------------------