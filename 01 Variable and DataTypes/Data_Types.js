// Primitive Data Types

// Number
n = 123;

// Null
n = null;

// String
s = "Hello, World!";

// Symbol
s = Symbol("unique");


// Boolean
b = true;

// BigInt
b = BigInt(1234567890123456789012345678901234567890);

// Undefined
u = undefined;

// Object
o = {
    name: "John Doe",
    age: 30,
    isEmployed: true,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    },
    hobbies: ["reading", "gaming", "hiking"],
}

// Function
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// Array
a = [1, 2, 3, 4, 5];


// Use Case 1
let price_1 = 299
let price_2 = 369
let totalPrice = price_1 + price_2
console.log(totalPrice);

// use case 2
let firstName = "Gurpal";
let lastName = "Singh";

var fullName = firstName + lastName;
console.log(fullName);

var fullName = firstName + " " + lastName;
console.log(fullName);

// JavaScript is Dynamically Typed Language

a = 5
console.log(typeof(a))
a = "alpha"
console.log(typeof(a))
a = true
console.log(typeof(a))

// JavaScript is a forgiving language

let num = 250
num = 45;  // in  this case wihout semicolon js cant give error bcz js is forgiving lang

let x = 4; x = 5; // in this case mendatory to use semicolon

let a1 = "2" + 2
let a2 = "5" - 2
console.log(a1, typeof(a1)); // "22" automatically convert into string using common sence

console.log(a2, typeof(a2)); // 3 bcz 5 turn into number

