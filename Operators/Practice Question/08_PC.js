// 8. What will be the output of the following JavaScript code?

let a = 5, b = 3, c = 3;


let result = a++  + --b * c-- - ++a + b-- / --c;
            //   5   +   2 * 3   -  7  + 2   /   1
            //   5   +     6     -  7  +    2 
            //       11          -  7  +    2
            //                   4     +    2
            //                         6 


console.log(`a : ${a}`);
console.log(`b : ${b}`);
console.log(`c : ${c}`);
console.log(`result : ${result}`);