// Q.5- Create a simple calculator. Take two numbers and an operator (+, -, *, /) and calculate the result using switch..

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