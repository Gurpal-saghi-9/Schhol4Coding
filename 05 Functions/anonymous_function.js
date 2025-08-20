/*
Anonymous Function:- An anonymous function is a function without a name, usually used as a value or passed as an argument.

Syntax:
function() {
  // code
}
*/

const greet = function() {
  console.log("Hello, Guru!");
};

greet();  // Output: Hello, Guru!

// Passed as Callback
// Anonymous Function in setTimeout
setTimeout(function() {
  console.log("Executed after 2 seconds");
}, 2000);


// Store Anonymous Function in a Variable
const welcome = function() {
  console.log("Welcome Guru!");
};

welcome();  


// Anonymous Function to Double Numbers in an Array
let arr = [2, 4, 6];
let doubled = arr.map(function(num) {
  return num * 2;
});

console.log(doubled);  


// Filter Even Numbers
let nums = [1, 2, 3, 4, 5, 6];
let evens = nums.filter(function(n) {
  return n % 2 === 0;
});

console.log(evens);  