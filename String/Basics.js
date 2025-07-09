/*
A string is a piece of text.
It can be a word, a sentence, a single letter, or even empty—anything made of characters.
In JavaScript, we write a string by putting text inside quotes:
"DesiDevlogs"
'JavaScript'
"123"
""
You can use double quotes (" "), single quotes (' '), or backticks ( ).
*/

let greeting = "Hello World";
let name = 'Ali';
let empty = "";
let sentence = `My name is ${name}`; // Template Literals


let alpha = 'Guru' + 123;

console.log(alpha);

let beta = alpha + 'halwa'
console.log(beta);

let fname ="Gurpal"
let lname = "singh"

console.log(`Your name is ${fname + " " + lname}`);


// creating string using constructor
let str = new String("Gurpal Singh")

// Sring Properties
str.length

console.log(str.length);

console.log(str[0]);
console.log(str[1]);
// console.log(str[-2]);



/* 
Methods:
str.toUpperCase() 
str.toLowerCase()
str.trim() 
str.concat(str2)
str.includes()
str.indexOf() 
str.charAt() –
str.replace(old, new) 
str.replaceAll(old, new)
str.slice(start, end)
str.split()
*/


// String are immutable
str = 'hello guru';

console.log(str[1]);

str[6] = 'p'// string are not changeable
console.log(str);
