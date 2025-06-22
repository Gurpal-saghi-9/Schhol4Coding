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
