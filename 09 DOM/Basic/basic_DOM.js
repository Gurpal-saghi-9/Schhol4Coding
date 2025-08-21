/*

5  phases of DOM

1. DOM understanding : TDOM is a tree-like structure representing the content of an HTML document. ✅

2. Selection of HTML element : To interact with HTML element we need to select them first. This is done using DOM selectors.Common methods:
    getElementById("id")
    getElementsByClassName("class")
    getElementsByTagName("tag")
    querySelector("css-selector") – selects the first match
    querySelectorAll("css-selector") – selects all matches ✅
     
3. How to change or manipulate HML : Once you select an element, you can change its content, attributes, or structure.✅

4. CSS using DOM : You can also change or apply CSS styles directly using the DOM. ✅

5. Event Listerners : Events let your webpage respond to user actions like clicks, hovers, keypresses, etc. ✅

*/

// ⏩ Selection
// let heading = document.querySelector("h1");
// let paragraphs = document.querySelector("p");

// ⏩ Change or Manipulte
// heading.innerHTML = "DOM Change or Manipulation"
// console.log(heading)
// paragraphs.innerHTML = "Mai Abhi JavaScript Sikh rha hu School 4 U se"

// ⏩ CSS
// heading.style.backgroundColor = "green"
// heading.style.color = "rgb(0,0,0)"

// // ⏩ Event Listerenrs
// paragraphs.addEventListener("mouseover", () => {
//     paragraphs.style.color = "white";
//     paragraphs.style.backgroundColor = "Black";
// })
// paragraphs.addEventListener("mouseout", () => {
//     paragraphs.style.color = "white";
//     paragraphs.style.backgroundColor = "blue";
// })

// ---------------- Box to circle ----------------------------

let btnOn = document.getElementById("btnOn");
let btnOff = document.getElementById("btnOff");
let box = document.querySelector("div");



// rotation
// btnOn.addEventListener("click", () => {
//   box.style.animation = "rotateBox 2s linear infinite";
//   box.style.backgroundColor = "blue";
//   box.style.border = "5px solid red"
// });

// btnOff.addEventListener("click", () => {
//   box.style.animation = "none";
//   box.style.backgroundColor = "red";
//   box.style.border = "5px solid blue"
// });


// Expand and shrink

btnOn.addEventListener('click', () => {
    box.style.scale = "1"
})

btnOff.addEventListener('click', () => {
    box.style.scale = "0.5"
})