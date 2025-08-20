// With parameter list & with return:- A function with parameters and return takes input values, performs a task, and sends back a result using the return statement.

function add(a, b) {
  return a + b;
}
let result = add(5, 3);
console.log("Sum is:", result); // Output: Sum is: 8


// Check if a Number is Even
function isEven(num){
    if (num % 2 === 0) {
        return true
    }
    return false
}
if(isEven(5)){
    console.log("even");
}else{
    console.log("False");
    
}


// Calculate Area of a Rectangle
function getArea(length, width){
    return length * width
}
console.log(getArea(5,10));


// Get Full Name
function getFullName(first, last){
    return first + " " + last
}
console.log(getFullName('Gurpal', "Singh"));


// Find Maximum of Two Numbers
function getMax(a, b){
    if (a > b) return a
    else return b
}
let a = 7, b = 8;
result = getMax(a,b)
console.log(`Maximum from ${a}, ${b} is: ${result}`);

