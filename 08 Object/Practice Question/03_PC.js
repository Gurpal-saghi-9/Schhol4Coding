/*
3. Write a function that takes object and returns the number of properties in an object.
*/

obj = {
  name : "Guru",
  age : 21,
  city : "Sirsa",
  gender : "Male",
  isMarried : "No"
}

let obj_length = Object.keys(obj).length;

console.log(obj_length)