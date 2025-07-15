/*
Create a person object with properties: name, age, and city. Then
a) Log each property as: value of “name” property is “Gurpal Singh” using loop.
b) Add a new property called email to the person object.
c) Delete “city” property from person object.
*/

const person = {
  name: "Gurpal Singh",
  age: 21,
  city: "New York",
};

// a) Log each property
for (const key in person) {
  console.log(`value of "${key}" property is "${person[key]}"`);
}

// b) Add a new property called email
person.email = "Gurusaghi324@gmail.com";

// c) Delete "city" property
delete person.city;

console.log("Updated person object:", person);