// IF :- if statement in JavaScript is used to execute a block of code only if a specified condition is true.

let age = 17;

// Check if age is 18 or above to vote.
if (age >= 18) {
    console.log("Eligible for vote");
}

// Print "Positive" if a number is greater than 0.
let num = 0;

if(num > 0 ){
    console.log("Positive");
}

// Print "Empty" if a string has no characters.
let str = "";

if(str == ""){
    console.log("Empty");
}

// Compare two numbers and print "Equal" if they match.
let givenNo = 5;
let n = "5";
if(n == givenNo){
    console.log("Equal")
}

// If isLoggedIn is true, print "Welcome back!"
let isLoggedIn = false;
if (isLoggedIn) {
    console.log("Welcome back!");
}

// Print "Divisible by 5" if a number is divisible by 5.
num = 56;
if (num % 5 == 0) {
    console.log("Divisible by 5");
}

// Print "Strong" if password length is 8 or more.
let password = "123456789"

if (password.length >= 8){
    console.log("Strong");
}

// Print "In range" if number is between 10 and 50.
num = 47;

if (num >= 10 && num <= 50) {
    console.log("In range");
}