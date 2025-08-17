/*
3. Write a function that takes object and returns the number of properties in an object.
*/

function countProperties(obj) {
  if (typeof obj !== "object" || obj === null) {
    return 0; // Return 0 for non-object types or null
  }

  return Object.keys(obj).length; // Count the number of keys in the object
}

// Example usage:
const exampleObject = {
  name: "Alice",
  age: 30,
  city: "Wonderland",
  hobbies: ["reading", "adventure"]
};

console.log(countProperties(exampleObject)); // Output: 3
