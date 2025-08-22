// ------------------- Selection -------------------
// 1. using tag name
// let a = document.getElementsByTagName('div')
// console.log(a);


// 2.using id
// console.log(document.getElementById('unique'));

// 3. using class
// console.log(document.getElementsByClassName('hd2'))

// 4. query selector : returns the first matched element use # for id and . for class
// let h1 = document.querySelector('h1')
// console.log(h1);

// 5. all query selector : return the all matched elements
// let div = document.querySelectorAll('h2')
// console.log(div);

// let div1 = document.querySelector('#div1')
// console.log(div1);
// console.log(div1.firstChild);
// console.log(div1.lastChild);


// ------------------- Manipulating HTML -------------------
// let h1 = document.querySelector('h1')
// console.log(h1.tagName);
// console.log(h1.nodeName);

// we can't change the tag name its readonly also nnodename also can't changeable but we can change tag name using own logic
// h1.tagName = 'p'
// console.log(h1.tagName)
// h1.nodeName = 'p'
// console.log(h1.tagName)

//  Text change 
// console.log(h1.innerHTML); // print text by removing the extra spaces or linebreakd
// console.log(h1.textContent); // print as it is can't remove any extra spaces or linebreaks

// h1.innerHTML = "This heading change \n using the inner HTML"
// console.log(h1.innerHTML);

// element change
// h1.innerHTML = "<span>Element change p to span</span>"
// console.log(h1.innerHTML);
// console.log(h1.firstChild);

// if we can change the visibility of the h1 into hidden
// console.log(h1.tagName);
// console.log(h1.nodeName);
// console.log(h1.innerText);
// console.log(h1.textContent);
// console.log(h1.innerHTML);


// Inserting Elements
// let div = document.querySelector('div');

// Append at the end
// let elem1 = document.createElement('p')
// elem1.innerHTML = "Parah 4 using append"
// div.append(elem1)

// Append at the front
// let elem2 = document.createElement('p')
// elem2.innerHTML = "Parah 0 using Prepend"
// div.prepend(elem2) 

// append outside the elemeent
// let elem3 = document.createElement('p')
// elem3.innerHTML = "Parah 5 outside te div using after"
// div.after(elem3)

// append outside the elemeent
// let elem4 = document.createElement('p')
// elem4.innerHTML = "Parah -1 outside te div above using before"
// div.before(elem4)

// append on a specfic place
// let elem5 = document.createElement('p')
// elem5.innerHTML = "Parah append at a specific position"
// div.insertAdjacentElement("beforeend", elem5)

// let p = div.children[4]
// p.remove()

// // Parent Node
// let parah2 = document.querySelector("#parah2")
// parah2.style.backgroundColor = "Green"

// let elem6 = document.createElement('p')
// elem6.innerHTML = "Append using parent node . append child"

// let parentNode = parah2.parentNode
// parentNode.append(elem6)

// let newElem = document.createElement('div')
// newElem.innerText = "Hello"

// parentNode.replaceChild(newElem, parah2)
// parentNode.removeChild(elem6)


// let elem = document.createElement('p')
// elem.innerText = "New Paragraph"

// let lastParah = div.children[2]
// div.insertBefore(elem, lastParah)

//// Work on Attribut

let div = document.querySelector('.box')

console.log(div.getAttribute())

// ------------------- Manipulating CSS -------------------

// ------------------- Event Handling -------------------