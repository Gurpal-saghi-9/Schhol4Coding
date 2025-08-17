/*
2. Take a string and a character from the user and:
    a) count how many times that character appears in the string.
    b) Case-Insensitive Version
    c) Find All Occurrence Positions
*/

let str = "I Am Gurpal Singh Saghi";
let char = "a";

let count = 0;
let positions = [];

for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === char.toLowerCase()) {
        count++;
        positions.push(i); // store the index
    }
}

console.log(`Character '${char}' appears ${count} times.`);
console.log(`Positions: ${positions}`);
