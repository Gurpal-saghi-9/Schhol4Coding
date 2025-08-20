// Logical Operator : Used when you’re checking more than one thing

let True = true;
let False = false;

// Logical AND (&&) operator
console.log(True && True);
console.log(True && False);
console.log(False && True);
console.log(False && False); 

// Logical OR (||) operator
console.log(True || True); 
console.log(True || False);
console.log(False || True);
console.log(False || False); 

// Logical NOT (!)
console.log(!True);  // Outputs: false
console.log(!False); // Outputs: true

// Logical AND (&&) operator with multiple conditions
// Example: Check if a number is between 1 and 10
let num = 7;
console.log(num > 1 && num < 10); // Outputs: true
// Example: Check if a user is logged in and has admin privileges
let isLoggedIn = true;
let isAdmin = false;
console.log(isLoggedIn && isAdmin); // Outputs: false   

// Logical OR (||) operator with multiple conditions
// Example: Check if a user is either an admin or a moderator
let isAdminUser = false;
let isModerator = true;
console.log(isAdminUser || isModerator); // Outputs: true
// Example: Check if a user is logged in or has a valid session
let hasValidSession = false;
console.log(isLoggedIn || hasValidSession); // Outputs: true

// Logical NOT (!) operator to negate a condition
// Example: Check if a user is not logged in
let isUserLoggedIn = false;
console.log(!isUserLoggedIn); // Outputs: true
// Example: Check if a user is not an admin
let isUserAdmin = true;
console.log(!isUserAdmin); // Outputs: false
