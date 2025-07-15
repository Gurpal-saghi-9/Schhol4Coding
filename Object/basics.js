/*
An object is a collection of key-value pairs or stores related information as a set of key-value
pairs. It's a way to group data and functions together.
Example: Think of a real-life object “car”:
*/

// object using liternal

let car = {
    brand: "Toyota",
    color: "red",
    year: 2020,
    speed: 120,
    start: function() {
        console.log("The car has started.");    
    }
}

//object using object constructor 
let bike = new Object();
bike.brand = "Yamaha";
bike.color = "blue";
bike.year = 2019;
bike.speed = 100;

// Accessing object properties
// Dot notation(.)
console.log(car.brand); // Output: Toyota
console.log(bike.color); // Output: blue

// Bracket notation([])
console.log(car["year"]); // Output: 2020
console.log(bike["speed"]); // Output: 100

// Adding a new property
car.model = "Corolla";
console.log(car.model); // Output: Corolla
console.log(car); // Output: { brand: 'Toyota', color: 'red', year: 2020, speed: 120, start: [Function], model: 'Corolla' }

// updating an existing property
car.color = "black";
console.log(car.color); // Output: black

// Deleting a property
delete car.year;
console.log(car); // Output: { brand: 'Toyota', color: 'black', speed: 120, start: [Function], model: 'Corolla' }


// Using a method
car.start(); // Output: The car has started.

// this keyword in object
let person = {
    name: "Gurpal Singh",
    age: 19,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
// Calling the method
person.greet(); // Output: Hello, my name is Alice and I am 30 years old.

// loop through object properties
for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}

for (let [key, val] of Object.entries(car)) {
    console.log(`${key}: ${val}`);
}

// Object.keys() to get an array of keys
console.log(Object.keys(car)); // Output: ['brand', 'color', 'speed', 'start', 'model']

// Object.values() to get an array of values
console.log(Object.values(car)); // Output: ['Toyota', 'black', 120, [Function: start], 'Corolla']

// Object.entries() to get an array of key-value pairs
console.log(Object.entries(car)); // Output: [['brand', 'Toyota'], ['color', 'black'], ['speed', 120], ['start', [Function: start]], ['model', 'Corolla']]

// Object.assign() to copy properties from one object to another
let newCar = Object.assign({}, car);
console.log(newCar); // Output: { brand: 'Toyota', color: 'black', speed: 120, start: [Function: start], model: 'Corolla' }

// Object.freeze() to make an object immutable
Object.freeze(car);
// Attempting to change a property after freezing
car.brand = "Honda"; // This will not change the brand
console.log(car.brand); // Output: Toyota (remains unchanged)

// Object.seal() to prevent adding new properties but allows modification of existing ones
Object.seal(car);
// Attempting to add a new property after sealing
car.year = 2021; // This will not add the year property
console.log(car.year); // Output: undefined (remains unchanged)
// Attempting to modify an existing property after sealing
car.color = "green"; // This will change the color property
console.log(car.color); // Output: green (property modified)

// ObjecctName.hasOwnProperty(propertyName) to check if an object has a specific property
console.log(car.hasOwnProperty("brand")); // Output: true
console.log(car.hasOwnProperty("year")); // Output: false (year was deleted)

// singleton object
let singleton = {
    instance: null,
    getInstance: function () {
        if (!this.instance) {
            this.instance = {
                value: "This is a singleton instance"
            };
        }
        return this.instance;
    }
};

// Usage
let obj1 = singleton.getInstance();
let obj2 = singleton.getInstance();

console.log(obj1 === obj2); // true ✅
console.log(obj1.value);    // "This is a singleton instance"

// Destructing
let { brand, color, speed } = car;
console.log(brand); // Output: Toyota
console.log(color); // Output: green
console.log(speed); // Output: 120

// Spread operator
let newCarDetails = { ...car, year: 2021 };
console.log(newCarDetails); // Output: { brand: 'Toyota', color: 'green', speed: 120, start: [Function: start], model: 'Corolla', year: 2021 }

// Rest operator
function displayCarDetails({ brand, color, ...rest }) {
    console.log(`Brand: ${brand}, Color: ${color}`);
    console.log("Other details:", rest);
}
displayCarDetails(car);
// Output:
// Brand: Toyota, Color: green
