let arr = [10, 5, 1, 20];
// sort basis on string
arr.sort();
console.log(arr);

let heroes = [ 'spiderman', 'hulk', 'hawkeye', 'ironman', 'shaktiman', 'wanda' ]
heroes.sort()
console.log(heroes);

arr.sort((a, b) => {
    console.log(a,b);
    return a - b;
})
console.log(arr);

arr = [10, 5, 1, 20]
arr.sort((a, b) => {
    console.log(a,b);
    return b - a;
})
console.log(arr);
