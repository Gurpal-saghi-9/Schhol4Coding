/*
7. Take an email and password from the user. If the email or password is incorrect or does not match the stored values, display the message "Invalid email or password." If both email and password match the stored values, display "You are logged in successfully!"
*/

const storedEmail = "user@gmail.com";
const storedPassword = "12345678";

let inpem = "new@MediaList.com";
let inppw = "123456";

const message = (inpem === storedEmail && inppw === storedPassword) ? "You are logged in successfully!" : "Inavlid email or password.";

console.log(message);
