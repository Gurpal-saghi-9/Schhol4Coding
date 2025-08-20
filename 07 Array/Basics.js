/*
Array :- An array is a list that can store multiple values in one place.
Think of it like a row of boxes, where each box can hold one item (like a number, word, etc.).
You can use it to group similar things together.
*/

// Create array using array Literal method (recommended):

let colors = ['red', 'blue', 'green']

let marks = [23, 94, 55, 26, 84, 89]

let personDetail = ["Muskan", 18, "Bhagalpur"]

// Create array using array constructor:
let arr = new Array("spiderman", "ironman", "thor")

// Array constructor is mostly used when we want to create an empty array with the given length

// Indexing strat from 0 and also array is a mutable
console.log(arr[0]);
arr[0] = 'shaktiman'
console.log(arr);


// typeof
console.log(typeof arr);

// length
console.log(arr.length);


// array using for loop
let array =  [1, 3, 5, 8, 100, 99];

for (let i = 0; i < array.length; i++){
    console.log(array[i] * 2);
}

for (let val of array){
    console.log(val);
}

for(let elem in array){
    console.log(elem);
}

/*
Array Methods:
1. push()
2. pop()
3. unshift()
4. shift()
5. splice()
6. slice()
7. concat()
8. join()
9. toString()
10. includes()
11. indexOf()
12. reverse()
13. sort()
14. find()
15. flat()
*/

// Sort method

/*
Array Iteration methods or functional array methods
1. map()
2. filter()
3. reduce()
5. forEach()
*/