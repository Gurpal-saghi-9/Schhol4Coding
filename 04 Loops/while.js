/*
While Loop:- A while loop in JavaScript repeats a block of code as long as a given condition is true.
Syntax:
while (condition) {
    // code to run repeatedly
}

*/

let i = 1;
while (i <= 5) {
    console.log("Hello Guru!", i);
    i++;
}

// Print Numbers from 1 to 10
i = 1;
while(i <= 10) {
    console.log(i);
    i++;
}

// Print Even Numbers from 1 to 20
i = 1;
while (i <= 20){
    if(i % 2 == 0){
        console.log(i);
    }
    i++;
}

// Sum of First 10 Natural Numbers
i = 10
let sum = 0;
while (i >=1) {
    sum += i;
    i-- ;
}
console.log(sum);

//  Reverse Count from 10 to 1
i = 10
while (i >=1) {
    console.log(i);
    i-- ;
}

// Table of Any Number
let n = 5;
i = 1;
while (i <= 10) {
    console.log(`${n} X ${i} = ${n * i}`);
    i++ ;
}

// Count digits in a number using while loop
let num = 12345;
let original = num; // Just for keeping the original value (optional)
let count = 0;

while (num > 0) {
    count++;
    num = (num - num % 10) / 10; // Remove last digit
}

if (original === 0) {
    count = 1;
}

console.log("Total digits:", count);

// Find factorial of a number using while
num = 5;      // You can change this to any positive integer
i = 1;
let fact = 1;

while (i <= num) {
    fact = fact * i;
    i++;
}

console.log("Factorial is:", fact);

