// Default Pafameter : A default parameter is a value that a function parameter takes automatically if no argument is passed during the function call.


// Greeting Function with Default Name
function greet(name = "Guest") {
  console.log("Hello " + name);
}
greet();           // Output: Hello Guest
greet("Guru");     // Output: Hello Guru


// Add Two Numbers with One Default Value
function add(a, b = 10) {
  console.log("Sum is:", a + b);
}
add(5);        // Output: Sum is: 15
add(5, 3);     // Output: Sum is: 8


// Show Message with Default Language
function showMessage(message, lang = "English") {
  console.log(`[${lang}] ${message}`);
}

showMessage("Welcome!");          // Output: [English] Welcome!
showMessage("Bienvenue", "French"); // Output: [French] Bienvenue


// Multiply with Default Multiplier
function multiply(num, factor = 2) {
  return num * factor;
}

console.log(multiply(5));      // Output: 10
console.log(multiply(5, 4));   // Output: 20


// Connect to Server with Default Host and Port
// Real-World Use:
function connectDB(host = "localhost", port = 3306) {
  console.log(`Connecting to ${host} on port ${port}...`);
}

connectDB();  // localhost and 3306 used
connectDB("myserver", 8080); // custom values used


// Show number with confusion
function show(a = 10, b) {
  console.log(a, b);  
}  

show(5); // Output: 5 undefined (works, but confusing)


