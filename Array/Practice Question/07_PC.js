// 7. Check whether given string is palindrome or not

let str = "madam";

str2 = Array.from(str).reverse().join("");
if (str === str2) {
    console.log("String is palindrome");
}else {
    console.log("String is not palindrome");
}

s = "hello"
console.log(s.split("").reverse().join("") === s ? "Palindrome" : "Not Palindrome");    