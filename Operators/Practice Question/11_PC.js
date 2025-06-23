// 10. What will be the output of the following JavaScript code?

let a = 6;
let b = 3;
let c = "6";

a += b << 1;
let d = a & b;
let e = a | b;
let f = a ^ b;
let g = ~a;

let check = (a == c) && (d < e) || !(f === e);

let result = check ? typeof g : --b;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(check);
console.log(result);
