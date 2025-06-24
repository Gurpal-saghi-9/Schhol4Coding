// Without parameter & without return: A function without parameters and return simply runs a fixed block of code when called, without taking input or giving output.

function welcome() {
  console.log("Welcome to Desi Devlogs!");
}

welcome(); // Just calls and prints


// Page loader
function showMessage() {
  console.log("Code Loaded Successfully!");
}

showMessage();

// Create a Function to Print a Welcome Message
function showWelcome(){
    console.log("Welcome to My Website!");    
}
showWelcome()

// Create a Function to Show an Alert Box
function showAlert(){
    // alert("This is an alert");
}
showAlert()

// Create a Function to Print Developer Info
function showDeveloper(){
    let name = "Guru";
    let role = "JavaScript Developer";

    console.log(`Name is ${name} & Role is ${role}`);
}
showDeveloper()

// Create a Function to Clear the Console
function clearScreen(){
    console.clear();
}
clearScreen()

// Create a Function to Print Current Year
function printYear(){
    let year = new Date().getFullYear();
    console.log("Current Year:", year);
}
printYear()