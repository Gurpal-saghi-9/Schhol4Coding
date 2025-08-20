// 6. We have three variables a, b, c, a contains any number, b contains any string, c contains any object, and d contains any array. Can we create an array from all these four variables? If yes, How?

let a = 1
let b = "guru"
let c = {
    name : "Gurpal",
    age : 21
}
let d = [1, 2, 3, 4, 5]

console.log(Array.of(a, b, c, d));
