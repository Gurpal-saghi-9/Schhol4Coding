/* 
For Loop:- A for loop in JavaScript is used to repeat a block of code a specific number of times.
Syntax: 
for (initialization; condition; increment) {
    // code to repeat
}
*/

for (let i = 1; i <= 5; i++) {
    console.log("Hello Guru!", i);
}

// Use a for loop to print numbers from 1 to 10.
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// Print only even numbers using a for loop and if condition.
console.log("Even numbers from 1 to 20: ");
for (let i = 2; i <= 20; i++) {
    
    if(i % 2 == 0){
        console.log(i);
    }    
}

// Calculate the Sum of First 10 Natural Numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;    
}
console.log(sum);

// Print Multiplication Table
let num = 5;

for(let i = 1; i <= 10; i++){
    console.log(`${num} x ${i} = ${num * i}`)
}

// Reverse Count from 10 to 1

for(let i = 10; i >= 1; i--){
    console.log(i);
}

// Print all numbers from 1 to 50 that are divisible by 3 and 5.
for(let i = 1; i <= 50; i++){
    if(i % 3 == 0 || i % 5 == 0){
        console.log(i);
    }
}

// Find the factorial of a number (like 5! = 5×4×3×2×1).
let fact = 1;
for (let i = 1; i <= 5; i++) {
    fact *= i;    
}
console.log(fact);