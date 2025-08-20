// Switch Statement:- The switch statement in JavaScript is used to select one block of code to run from many options based on the value of an expression.

/*
Input a number (1–7), use switch to print the corresponding day name (e.g., 1 → Monday, 2 → Tuesday, ...).
*/
const day = 3;

switch(day){
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thrusday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("SUnday")
        break;
    default:
        console.log("Invalid Day");
}

/*
Input two numbers and an operator (+, -, *, /), use switch to perform the operation and print result.
*/
let num1 = 58;
let num2 = 5;
let op = "*";

switch(op){
    case "+":
        console.log(`${num1} + ${num2} = ${num1+num2}`);
        break;
    case "-":
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case "*":
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case "/":
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;
    default:
        console.log("Invalid operator")
}

/*
Input a number (1–12), use switch to print the corresponding month name.
*/
let month = 7;

switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month")
}

/*
Input a color ("red", "yellow", "green"), use switch to print the action:
Red → "Stop"
Yellow → "Get Ready"
Green → "Go"
*/
let signal = "Yellow";

switch(signal){
    case "Red":
        console.log("Stop");
        break;
    case "Yellow":
        console.log("Get Ready");
        break;
    case "Green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal")
}

/*
Input grade character (A, B, C, D, F) and use switch to print a message like:
A → "Excellent"
B → "Good",
F → "Fail", etc.
*/
let grade = "B"; // Change this to test (A, B, C, D, F)

switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Below Average");
        break;
    case "F":
        console.log("Fail");
        break;
    default:
        console.log("Invalid grade");
}
