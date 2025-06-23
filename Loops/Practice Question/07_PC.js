/*
7. Print the following pattern. (build it for nth numbers)
        1
        12
        123
        1234
        12345
*/
let r = 5;

for(let i = 1; i <= r; i++){
    let str = "";
    for(let j = 1; j <= i; j++){
        str += j;        
    }
    console.log(str);
}

/*
1
21
321
4321
54321

*/

for (let i = 1; i <= r; i++) {
    let str = "";
    for (let j = i; j >= 1; j--) {
        str += j;
    }
    console.log(str);
}
