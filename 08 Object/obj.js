let car = {
    brand: "Lamborghini",
    color: "red",
    year: 2020,
    speed: 120,
    'full name': "Lamborghini Aventador",
    start: function() {
        console.log("The car has started.");    
        return 'started';
    },
    stop: () => {
        console.log("The car has stopped.");
        return 'stopped';
    }
}

// console.log(car);
// console.log(car.color);
// car.stop();
// console.log(car.stop());

// console.log(car['brand']);
// car['start']();

// console.log(car['full name']);

// object using object constructor
// let data = new Object();
// data.name = 'Guru';
// data.age = 2023;
// data.city = 'Bangalore';
// data.state = 'Karnataka';

// console.log(data);

// delete data.age;
// console.log(data);

// let obj = {
//     name : "alpha",
//     greet: function (){
//         console.log(`Hello, my name is ${this.name}`);  
//     }
// }

// obj.greet();


// ----------------------- ------------------------

let obj = {
    name : "Alpha",
    age : 24
}

// keys = Object.keys(obj)
// console.log(keys);

// values = Object.values(obj)
// console.log(values)

// map of object (for of is not woking on object)
// for in working on adress
// for(let test in obj){
//     console.log(test)
// }
// watch value using keys in object
// for(let test in obj){
//     console.log(obj[test])
// }

// entries = Object.entries(obj)
// console.log(entries)

// let assign = Object.assign(obj)
// console.log(assign)
// assign["class"] = "BCA"
// console.log(assign)

// Object.freeze(obj)
// console.log(obj)
// After freez() its working well but it can't be updateble and also we can't be delete any property and also can't be modifyable 
// obj["class"] = "B.Tech"
// console.log(obj)
// obj["name"] = "Guru"
// console.log(obj["name"])
// delete obj.age
// console.log(obj)


// Object.seal(obj)
// console.log(obj)
/// if we can seal any object then we can't add or delete but can be  modifyable
// obj["city"] = "sirsa"
// console.log(obj)
// obj["age"] = 26
// console.log(obj)
// delete age
// console.log(obj)

// ObjName.hasOwnProperty(key) : give answer in yes or no means check is property avail in or not
console.log(obj.hasOwnProperty("age"))
console.log(obj.hasOwnProperty("city"))