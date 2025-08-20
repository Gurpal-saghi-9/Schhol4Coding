/* Rest Parameter(...) :- Rest parameter (...) allows a function to accept multiple arguments as an array, when the number of arguments is not fixed.
Syntax:
function functionName(...paramName) {
  // paramName is now an array
}
*/

function sumAll(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log(sumAll(1, 2, 3, 4)); // Output: 10

// -------------------------------------------------------------------------------------

function listSkills(name, ...skills) {
    console.log(name + "'s skills are:");
    for (let skill of skills) {
        console.log(" - " + skill);
    }
}

listSkills("Guru", "HTML", "CSS", "JS", "React");
// Output:
// Guru's skills are:
//  - HTML
//  - CSS
//  - JS
//  - React

// -------------------------------------------------------------------------------------

// Sum of All Numbers
function sumAll(...nums) {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total;
}

console.log(sumAll(1, 2, 3));     // Output: 6
console.log(sumAll(5, 10, 15));   // Output: 30

// -------------------------------------------------------------------------------------

// Join All Strings
function joinWords(...words) {
    return words.join(" ");
}

console.log(joinWords("Desi", "Devlogs", "rocks!"));  // Output: "Desi Devlogs rocks!"

// -------------------------------------------------------------------------------------

// Show Total Number of Items
function showCount(...items) {
    console.log("Total items:", items.length);
}

showCount("pen", "book", "bag");  // Output: Total items: 3

// -------------------------------------------------------------------------------------

// Print All Names in a List
function printNames(...names) {
    for (let name of names) {
        console.log(name);
    }
}

printNames("Guru", "Simran", "Karan");
// Output:
// Guru
// Simran
// Karan

// -------------------------------------------------------------------------------------

// Add Marks with Student Name
function addMarks(name, ...marks) {
    let total = 0;
    for (let m of marks) {
        total += m;
    }
    console.log(`${name}'s total marks: ${total}`);
}

addMarks("Guru", 75, 85, 90);  
// Output: Guru's total marks: 250

// -------------------------------------------------------------------------------------