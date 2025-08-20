// IF...Else : if...else executes one block of code if the condition is true, and another if it is false.

//  Input a number, print "Even" if divisible by 2, else "Odd".
let number = 436;

if (number % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Input age, if 18 or above print "Eligible to vote", else "Not eligible"
let age = 19;

if (age >= 10) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible");
}

//  Input a number, print "Positive" if > 0, else "Negative or Zero".
number = -278;

if (number > 0) {
    console.log("Positive");
} else {
    console.log("Negetive");
}

// If password length ≥ 8, print "Strong password", else "Weak password".
let password = "guru@1234";

if (password.length >= 8) {
    console.log("Strong Password");
} else {
    console.log("Week password");
}

// Input two numbers, print which one is greater.
let n1 = 67, n2 = 78;

if (n1 >= n2) {
    console.log(`${n1} is Greatest`);
} else {
    console.log(`${n2} is Greatest`);
}

//  If temperature > 30, print "Hot day", else "Pleasant day".
let temperature = 36;

if (temperature >= 30) {
    console.log("Hot Day");
} else {
    console.log("Pleasant Day");
}

// Input marks, if ≥ 33 print "Pass", else "Fail".
let marks = 68;

if (marks >= 33) {
    console.log("Pass");
} else {
    console.log("Fail");
}

//  If number between 1 and 100, print "Valid", else "Invalid".
number = 78;
if (number >= 1 && number <= 100) {
    console.log("Valid");
} else {
    console.log(Invalid);
}

//  If year divisible by 4 and not 100 unless divisible by 400, then leap year.
let year =  2048;

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("Leep Year");
} else {
    console.log("Not a Leep Year");
}