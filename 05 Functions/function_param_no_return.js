// With parameter list & without return: A function with parameters and no return takes input values, performs a task, but does not send any output back.

function sum(a,b) {
  console.log(a + b);
}
sum(5, 6);  // Output: Hello Guru!


// Greet a User by Name
function greetUser(name){
    console.log(`Hello, ${name}!`);
}
greetUser("Guru")


// Print Square of a Number
function printSquare(num) {
    let square = num * num;
    console.log("Square is:", square);
}
printSquare(5);


// Display User Details
function showDetails(name, age) {
    console.log("Name:", name);
    console.log("Age:", age);
}
showDetails("Guru", 22);


// Print Multiplication Table of a Number (1–10)
function printTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
printTable(7);

// Check and Print if Number is Even or Odd
function checkEvenOdd(Number){
    if (Number % 2 == 0) {
        console.log("EVEN");
    }
    else{
        console.log("ODD");
    }
}
checkEvenOdd(10)
checkEvenOdd(7)