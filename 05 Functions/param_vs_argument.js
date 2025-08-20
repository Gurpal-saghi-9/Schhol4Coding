// Parameter : A parameter is a placeholder (variable) defined in the function declaration to receive values.

function greet(name) {  // ← 'name' is a parameter
  console.log("Hello " + name);
}


// Arguments :- An argument is the actual value passed to the function when it's called.

greet("Guru");  // ← "Guru" is an argument

// --------------------------------------------------------------------------------

// Parameters: a, b
function add(a, b) {
  return a + b;
}
// Arguments: 5, 10
let result = add(5, 10);

console.log("Sum is:", result);  // Output: Sum is: 15
