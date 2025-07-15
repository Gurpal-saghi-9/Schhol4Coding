let str = "Gurpal Singh";

console.log(str.toLowerCase());
console.log(str.toUpperCase());

str1 = "  hello "
console.log(str1.trim());

let fname = "gurpal";
let lname = "singh";
let fulName = fname.concat(" " , lname);

console.log(fulName);

let str2 = "I am boy?";
console.log(str2.includes("boy")); 
console.log(str2.indexOf("a"));
console.log(str2.charAt(3))
console.log(str2.replace("boy", "guru"));

let str3 = "This is am are good is it";
console.log(str3.replaceAll("is", "alpha"));

console.log(str2.slice(5,8));
console.log(str2.substring(4,6));

let str4 = "alpha beta gama";
console.log(str4.split(" "));
