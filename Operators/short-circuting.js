// Short-Circuting:- Short-circuiting in JavaScript refers to the way logical operators (&&, ||, and ??) evaluate expressions. It allows you to control the flow and return values based on truthiness without writing full if statements.

// Logical AND (&&): Returns the first falsy value or the last value if none are falsy. (Commonly used to safely access properties.)

let res = "Ram" && true && "" && 66;
console.log(res); // Output: "" (the first falsy value)
// Explanation: The expression evaluates from left to right. It stops at the first falsy value, which is an empty string in this case. If all values are truthy, it returns the last value.
console.log(true && "Gurpal Singh" && 5 && true); // Output: true
// Explanation: All values are truthy, so it returns the last value, which is true.
console.log(0 && "Gurpal Singh" && 5 && true); // Output: 0
// Explanation: The first value is falsy (0), so it returns 0 without evaluating the rest of the expression.

// Logical origin(||) : Returns the first truthy value or the last value if all are falsy. (Commonly used to provide default values.)
let res1 = "Ram" || true || "" || 66;
console.log(res1); // Output: "Ram" (the first truthy value)
// Explanation: The expression evaluates from left to right. It stops at the first truthy value
console.log(false || "Gurpal Singh" || 5 || true); // Output: "Gurpal Singh"
// Explanation: The first value is falsy (false), so it continues to evaluate until it finds the first truthy value, which is "Gurpal Singh".
console.log(0 || "Gurpal Singh" || 5 || true); // Output: "Gurpal Singh"
// Explanation: The first value is falsy (0), so it continues to evaluate until it finds the first truthy value, which is "Gurpal Singh".
console.log(0 || "" || false || null); // Output: null
// Explanation: All values are falsy, so it returns the last value, which is null

// Nullish Coalescing (??): Returns the first defined value or the last value if all are undefined or null. (Commonly used to provide default values for variables.)
let res2 = null ?? undefined ?? "Default Value";
console.log(res2); // Output: "Default Value"
// Explanation: The expression evaluates from left to right. It stops at the first defined value, which is "Default Value" in this case.
console.log(undefined ?? "Gurpal Singh" ?? 5 ?? true); // Output: "Gurpal Singh"
// Explanation: The first value is undefined, so it continues to evaluate until it finds the first defined value, which is "Gurpal Singh".
console.log(null ?? "Gurpal Singh" ?? 5 ?? true); // Output: "Gurpal Singh"
// Explanation: The first value is null, so it continues to evaluate until it finds the first   defined value, which is "Gurpal Singh".
console.log(null ?? undefined ?? false ?? null); // Output: false
// Explanation: The first two values are null and undefined, so it continues to evaluate until it finds the first defined value, which is false.

// Summary: Short-circuiting allows you to write concise and efficient code by evaluating expressions based on truthiness. It helps avoid unnecessary evaluations and can be used to provide default values or safely access properties.
// Remember to use these operators wisely to enhance code readability and maintainability.

// Example of using short-circuiting in a function
function getUserName(user) {
    // Using logical AND to safely access the name property
    return user && user.name ? user.name : "Guest";
}   
console.log(getUserName({ name: "Gurpal Singh" })); // Output: "Gurpal Singh"
console.log(getUserName()); // Output: "Guest"
console.log(getUserName(null)); // Output: "Guest"

// Example of using short-circuiting to provide default values
function getConfigValue(config, key) {
    // Using logical OR to provide a default value if the key is not defined
    return config[key] || "Default Value";
}
console.log(getConfigValue({ theme: "dark" }, "theme")); // Output: "dark"
console.log(getConfigValue({}, "theme")); // Output: "Default Value"