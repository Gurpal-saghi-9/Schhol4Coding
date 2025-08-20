/*
For...of:- The for...of loop in JavaScript is used to iterate over iterable objects like arrays, strings, maps, etc., and gives direct access to each element.
Syntax:
for (let item of iterable) {
  // use item
}

*/

let fruits = ['apple', 'banana', 'mango'];

for (let fruit of fruits) {
  console.log(fruit);
}

// Print All Elements of an Array
let lang = ["HTML", "CSS", "JavaScript", "React"]
for (let l of lang){
    console.log(l);
}

// Print Each Character of a String
let str = "Gurpal"
for (let s of str){
    console.log(s);
}

// Sum All Numbers in an Array
let arr = [10, 20, 30, 40];
let sum = 0;
for(let a of arr){
    sum += a;
}
console.log(sum);

// Print Only Vowels from a String
let string = "Desi Devlogs"
for (const s of string) {
    if (s == 'a' || s == 'e' || s == 'i' || s == 'o' || s == 'u'){
        console.log(s);
    }
}

// Capitalize First Letter of Each Word
let array = ["guru", "sardar", "coder"];

for (let i = 0; i < array.length; i++) {
    let word = array[i];
    array[i] = word[0].toUpperCase() + word.slice(1);
}

console.log(array);
