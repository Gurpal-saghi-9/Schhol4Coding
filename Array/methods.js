let arr = [1, 2, 3, 4, 5, 6]

console.log(arr);

arr.push(7)
console.log(arr);

arr.pop()
console.log(arr);

arr.unshift(0)
console.log(arr);

arr.shift()
console.log(arr);

arr.splice(0, 2, 0, 1, 2)
console.log(arr);

sl = arr.slice(0, 2)
console.log(arr, " " , sl)

n1 = [1, 2, 3]
n2 = [4, 5, 6]
full = n1.concat(n2)
console.log(full);

// spread op
let newarr = [...arr, " ", ...n1, " ", ...n2, " ", ...full]
console.log(newarr);


let fruits = ['mango', 'banana', 'litchi', 'apple', 'litchi', 'guava']
console.log(fruits);
let test = fruits.join(" , ")
console.log(test, typeof test);

let bool = fruits.includes('apple')
console.log(bool);

num = [1 , 2, 3, 4]
console.log(num, typeof num);
convert = num.toString()
console.log(convert, typeof convert);


arr = [1, 2, 3, 4, 5, 6]

idx = arr.indexOf(3)
console.log(idx);
console.log(arr.reverse());

unsort = [5, 7, 2, 1, 7, 4]
sort = unsort.sort()
console.log(sort);
console.log(fruits);
console.log(fruits.sort());

test = fruits.find((item) =>{
    return item == 'mango'
})
console.log(test);

let heroes = ['spiderman', ['hulk', 'hawkeye', ['ironman'], 'shaktiman']]
console.log(heroes);
console.log(heroes.flat());
console.log(heroes.flat(2));
console.log(heroes.flat(Infinity));
