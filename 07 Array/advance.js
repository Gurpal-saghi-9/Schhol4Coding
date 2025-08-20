//  map()
var arr = [1, 2, 5, 9, 10]

let res = arr.map((elem) => {
    console.log(elem);
    return elem * 2
})

// console.log("original array : ", arr);

console.log("new array : ",res);


// foreach
var arr = [1, 2, 5, 9, 10]
arr.forEach((elem, idx) => {
    console.log(elem * 2);
    arr[idx] = elem * 2
})
console.log(arr);


// filter() : works on truthy falsy
var arr = [1, 2, 5, 9, 10]
filterarr = arr.filter((elem, idx, arr) => {
    return elem % 2 === 0    
})
console.log(arr);
console.log(filterarr);

var arr = [10, 2, 51, 59, 180, 35, 29]
filterArr = arr.filter((elem) => {
    return elem < 50  
})
console.log(filterArr);


// reduce()
var arr = [1, 2, 3, 4, 5, 6]
let result = arr.reduce((prevVal, currVal) => {
    return prevVal + currVal
},5)
console.log(result);

