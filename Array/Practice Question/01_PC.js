// 1. For an array with marks of students find the average marks of the entire class.

let arr = [65, 89, 49, 95, 31];

let sum = arr.reduce((acc, curr) =>{
    return acc + curr;
})

let average = sum / arr.length

console.log(`sum : ${sum}`);
console.log(`Average : ${average}`);

