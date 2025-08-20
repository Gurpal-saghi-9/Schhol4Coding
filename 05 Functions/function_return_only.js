// Without parameter list & with return:-  A function without parameters but with a return executes a fixed task and sends back a result without taking any input.

function getAppName() {
  return "Desi Devlogs";
}

let name = getAppName();
console.log(name);  // Output: Desi Devlogs

// Return Website Name
function getSiteName(){
    return "Desi Devlogs"
}
console.log(getSiteName());

// Return Current Year
function getYear(){
    return new Date().getFullYear()
}
console.log(getYear());

// Return a Random Number (1–10)
function getRandomNumber(){
    return Math.floor(Math.random()*10)
}
console.log(getRandomNumber());

// Return App Version
function getVersion(){
    return "v1.0.0"
}
console.log(getVersion());

// Return a Motivational Quote
function getQuote(){
    return "Keep pushing forward, Guru!"
}
console.log(getQuote());
