/*
Scenario : A website discounts based on the total shopping cart amount.

Question: Write a program where:

If the cart value is less than $50, no discount is applied
If the cart value is between $50 and $100, apply a 10% discount
If the cart value is more than $100, apply 20% discount.
Display the final cart total after the discount
*/

let cartValue = 120; // Change this value to test

let finalAmount;

if (cartValue < 50) {
    finalAmount = cartValue;
    console.log("No discount applied");
    
} else if (cartValue <= 100) {
    finalAmount = cartValue - (cartValue * 0.10); // 10% discount
    console.log("A 10% discount has bee applied.");
    
} else {
    finalAmount = cartValue - (cartValue * 0.20); // 20% discount
    console.log("A 20% discount has been applied.");
    
}

console.log("Final amount after discount: $" + finalAmount.toFixed(2));
