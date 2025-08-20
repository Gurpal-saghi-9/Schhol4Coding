let x = 10;
let y = 5;
let z = "10";

// c += y * 2;
let isEqual = x == z;
let isStrictEqual = x === z;
let logicTest = (isEqual || isStrictEqual) && !(y > 10);

let result = logicTest ? ++x : --y;

console.log(x);
console.log(y);
console.log(z);
console.log(isEqual);
console.log(isStrictEqual);
console.log(logicTest);
console.log(result);
console.log(typeof z);
