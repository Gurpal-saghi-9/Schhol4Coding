// 6. Write a program to find the largest number between 3 numbers using ternary operator

let n1 = 5;
let n2 = 7;
let n3 = 3;

let result = n1 > n2 ? (n1 > n3 ? n1 : n3) : (n2 > n3 ? n2 : n3);

console.log(result);