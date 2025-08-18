/*
4. Consider an array of mcu heroes ([ironman, captain, black widow, wanda, hulk, black panther]).
Now:
a) Add spiderman at the end and thor at the start.
b) Remove black widow and add hawkeye in its place.
c) Check whether captain is present in the array.
*/

let arr = ['ironman', 'captain', 'black widow', 'wanda', 'hulk', 'black panther']

arr.push('spiderman')
console.log(arr);

arr.unshift("thor")
console.log(arr);

arr.splice(3,1, 'hawkeye')
console.log(arr);

console.log(arr.includes('captain'))