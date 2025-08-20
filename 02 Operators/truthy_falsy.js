// "Truthy" and "falsy" values in JavaScript refer to how values are evaluated in boolean contexts, such as conditions in if statements or loops.
// A "truthy" value is one that evaluates to true in a boolean context, while a "falsy" value evaluates to false.

// Truthy values:
let truthyValues = [
    true,                // Boolean true
    1,                   // Non-zero number
    "non-empty string", // Non-empty string
    {},                  // Non-empty object
    [],                  // Non-empty array
    function() {},      // Function
    Infinity,           // Positive infinity
    -Infinity,          // Negative infinity
    new Date(),         // Date object
    // Symbol("symbol")    // Symbol
];

// Falsy values:
let falsyValues = [
    false,              // Boolean false
    0,                  // Zero
    -0,                 // Negative zero
    0n,               // Not a Number (NaN)
    "",                 // Empty string
    null,               // Null
    undefined,          // Undefined
    NaN                 // Not a Number
];

// Explanation:
// - The `truthyValues` array contains values that will evaluate to true in a boolean context.
// - The `falsyValues` array contains values that will evaluate to false in a boolean context.
// - The Symbol type is commented out because it is not universally supported in all JavaScript environments, but it is a truthy value when defined.
// - The `NaN` value is included in the falsy values, as it is a special case that represents "Not a Number" and evaluates to false in boolean contexts.
// Note: In JavaScript, all objects (including arrays and functions) are truthy, even if they are empty.
// - The `Infinity` and `-Infinity` values are also truthy, as they represent numerical values that are not zero or NaN.
// - The `new Date()` creates a Date object, which is also truthy.
