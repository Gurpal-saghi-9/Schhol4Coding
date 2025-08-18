// 5. How to check if given thing is array or not? How to convert other datatypes to array? What if we try to convert an object into an array?

let test = 'guru';
console.log(Array.isArray(test))
console.log(Array.from(test));

let test2 = 123;
console.log(Array.isArray(test2))
console.log(Array.from(test2));

let obj = {
    name : 'gurpal'
}
console.log(Array.from(obj))