// cosole hmara print krta hai output ko screen pa 
console.log("Variables");

// Variables are containers for storing data values

/*
Three stage of a variable:
1. Declaration
2. Initialization
3. Use
*/

// 1. Declaration
let name;
// 2. Initialization
name = "gurpal singh"
// 3. Use
console.log(name);

// Declaration + Initialization
let age = 21;
console.log(age);

// let a = 10;
// let b = 20;
// let c = 30;

let a = 10,b = 20,c = 30;
console.log(a,b,c);

//----------------- Let, Const, Var --------------------------

// let : Block-scoped variable that can be updated but not redeclared within the same scope.

let n = 20;
n

// we can update
n = 30
n

// let n = 40 # but can't be redeclared
n

// const: Block-scoped variable that cannot be updated or redeclared. Its value must be assigned at the time of declaration and remains constant.
const id = 33;
id

// id = 34 can't be update
id

// const id = 35  can't be redeclared
id

// var: Function-scoped variable that can be updated and redeclared. It is hoisted to the top of its scope and can lead to unexpected behavior if not used carefully.

var inum = 7;
inum

// can be updateable
inum = 8
inum

// can be redeclareable
var inum = 12;
inum