/*
On a login page, verify the user's credentials: Check if username is not empty AND password is not empty (&& operator).
If either is empty, display an error message: "Both fields are required."
*/

let username = "user123";
let password = "pass123";

let Message =
  username && password ? "Login Successfully" : "Both fields are required.";

console.log(Message);

username = "";
password = "";
Message =
  username && password ? "Login Successfully" : "Both fields are required.";
console.log(Message);
