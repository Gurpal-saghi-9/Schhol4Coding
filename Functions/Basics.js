/*
Function :- A function is a block of code designed to perform a particular task.It only runs when
called/invoked.
Or
A function in JavaScript is like a reusable set of instructions

Syntax (Function Definition): 
function functionName(parameters) {
  // code to execute
}

Syntax (Function call):
functionName()

*/


function greet(){
    console.log("Hello, Sir!");
}

greet()
greet()

// a = 12, b =13
// sum = a + b
// console.log(sum);
// a = 32, b = 73
// sum = a + b
// console.log(sum);
// a = 72, b = 83
// sum = a + b
// console.log(sum);

// instead of above compexity we can use function in reuasablity

function sum(a, b){
    return a + b
}

console.log(sum(2, 5));
console.log(sum(8, 3));
console.log(sum(11, 5));


/*
4 ways to create a function:
1. Without parameter list & without return.
2. Without parameter list & with return.
3. With parameter list & without return.
4. With parameter list & with return.
*/

/*
Types of Function:
1. Function Declaration(normal)
2. Function Expression
3. Arrow Function
4. Anonymous Function
5. IIFE (Immediately Invoked Function Expression)
6. Constructor Function
7. Callback Function
*/

/*
Types of Parameters:
1. Default Parameters
2. Reset Parameters
3. Use Parameter in return
*/

// Higher Order Function