// Calculate how many vowels and consonents are in a given string using for of loop

let string = "Gurpal Singh";

let VowelCount = 0,
  ConsonentCount = 0;

for (let letter of string) {
  if (
    letter == "a" ||
    letter == "e" ||
    letter == "i" ||
    letter == "o" ||
    letter == "u" ||
    letter == "A" ||
    letter == "E" ||
    letter == "I" ||
    letter == "O" ||
    letter == "U"
  ) {
    VowelCount++;
  } else if (letter !== " ") {
    ConsonentCount++;
  }
}

console.log(`Vowel = ${VowelCount}`);
console.log(`Consonents = ${ConsonentCount}`);
