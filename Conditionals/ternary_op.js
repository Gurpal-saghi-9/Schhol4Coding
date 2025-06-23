// Ternary Operator:- The ternary operator (condition ? expr1 : expr2) is a shorthand for if...else, returning one of two values based on a condition.

// Question: Use ternary to check if a number is even or odd.
let num = 7;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result); 

// Question: Use ternary to find the greater of two numbers.
let a = 10, b = 20;
let greater = (a > b) ? a : b;
console.log(greater); 

//  Question: If age ≥ 18, print "Eligible", else "Not eligible".
let age = 16;
let status = (age >= 18) ? "Eligible to vote" : "Not eligible";
console.log(status); 

//  Question: Check if number is Positive or Negative (0 = Positive for simplicity).
num = -5;
let sign = (num >= 0) ? "Positive" : "Negative";
console.log(sign); 

// Question: If password length ≥ 8, print "Strong", else "Weak".
let password = "abc123";
let strength = (password.length >= 8) ? "Strong" : "Weak";
console.log(strength); 
