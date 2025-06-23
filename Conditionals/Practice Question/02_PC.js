// Q.2- Find the smallest of three numbers. Numbers are given by the user.

let num1 = 45, num2 = 67, num3 = 34;

console.log(num1, num2, num3);

if (num1 < num2 && num1 < num3) {
    console.log(`${num1} is small`)
}else if (num2 < num1 && num2 < num3) {
    console.log(`${num2} is small`)
}else {
    console.log(`${num3} is small`)
}