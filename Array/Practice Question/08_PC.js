// 8. Capitalize the first letter of every word in a sentence.

let text = "hello gurpal singh saghi"

let capitalized = text.split(" ").map((Element) => {
    return Element.charAt(0).toUpperCase() + Element.slice(1);
})

console.log(capitalized.join(" "));
