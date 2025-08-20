let obj = {
    name: "Guru",
    age: 25,   
}

let keys = Object.keys(obj)
keys

let values = Object.values(obj)
values

let entries = Object.entries(obj)
entries

// for (let key of obj) {
//     console.log(key);
// }

for (let key in obj) {
    console.log(key);
}

for(let test in obj){
    console.log(obj[test]);
}

for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
}

// Object.freeze(obj);
obj.name = "Saghi"; // This will not change the name property
console.log(obj["name"]);
obj["new"] = "New Value"; // This will not add a new property
// console.log(obj.new); // This will return undefined

Object.seal(obj);
obj["name"] = "Saghi"; // This will not change the name property
console.log(obj["name"]);
// seal.name = "New Name"; // This will not change the name property
// seal.newProperty = "New Value"; // This will not add a new property

let assign = Object.assign({}, obj, { newProperty: "New Value" });
console.log(assign);
// assign.name = "New Name"; // This will change the name property

let prototype = Object.getPrototypeOf(obj);
console.log(prototype);
let prototypeOfPrototype = Object.getPrototypeOf(prototype);
console.log(prototypeOfPrototype);

