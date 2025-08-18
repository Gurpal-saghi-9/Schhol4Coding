// 3. Create an array with the given length (n) and store natural numbers from 1 to n.

let len = 10

let arr = new Array(len).fill(0)
arr.forEach((item, idx) => {
    arr[idx] = idx + 1
})
console.log(arr);
