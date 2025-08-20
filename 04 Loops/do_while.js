/*
A do...while loop in JavaScript runs the code block at least once, and then repeats it as long as the condition is true.
Syntax:
do {
  // code block
} while (condition);
*/

let i = 1;
do {
  console.log("Hello Guru!", i);
  i++;
} while (i <= 5);

// Print Numbers from 1 to 5
i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

// Print Even Numbers from 2 to 10
let num = 2;
do {
  console.log(num);
  num += 2;
} while (num <= 10);

// Sum of Numbers from 1 to 5
i = 1;
let sum = 0;
do {
  sum += i;
  i++;
} while (i <= 5);

console.log("Sum is:", sum); // Output: 15

// Reverse Count from 5 to 1
i = 5;
do {
  console.log(i);
  i--;
} while (i >= 1);

// Run Once Even if Condition is False
let x = 100;
do {
  console.log("This runs at least once!");
} while (x < 50);

//  Count Number of Digits in a Given Number
let number = 12345;
let count = 0;

do {
  number = Math.floor(number / 10);
  count++;
} while (number > 0);

console.log("Number of digits:", count); // Output: 5

// Factorial of a Number (e.g., 5! = 120)
num = 5;
let fact = 1;

do {
  fact *= num;
  num--;
} while (num >= 1);

console.log("Factorial is:", fact);

// Print Table of Any Number Using do...while
num = 7;
i = 1;

do {
  console.log(`${num} x ${i} = ${num * i}`);
  i++;
} while (i <= 10);

// Print All Odd Numbers Between 1 and 20
i = 1;
do {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
} while (i <= 20);
