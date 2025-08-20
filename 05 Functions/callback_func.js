/*
CallBack Function:- A callback function is a function passed as an argument to another function, to be executed later.

Syntax:-
function outer(callback) {
  // some code
  callback(); // calling the passed function
}

*/

function greetUser(name, callback) {
  console.log("Hi " + name);
  callback();  // invoke the callback
}

function sayBye() {
  console.log("Bye Guru!");
}

greetUser("Guru", sayBye);

// Output:
// Hi Guru
// Bye Guru!


// Using Anonymous Callback
function processData(callback) {
  console.log("Processing data...");
  callback();
}

processData(function() {
  console.log("Callback executed!");
});


// Real-life Example: setTimeout with Callback
setTimeout(function() {
  console.log("Executed after 1 seconds");
}, 1000);



// Example: Array map() with Callback
let arr = [1, 2, 3];

let doubled = arr.map(function(n) {
  return n * 2;
});

console.log(doubled);