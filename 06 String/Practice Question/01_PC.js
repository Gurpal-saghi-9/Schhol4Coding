/*
Create a program to take full name from user and generate a username start with @, followed by their full name and ends with underscore followed by the length of full name.
*/


let fname = "Gurpal Singh";

let username = `@${fname.trim().replaceAll(" ", "")}_${fname.length}`;

console.log(username);

// console.log("@" + fname + "_" + fname.length);