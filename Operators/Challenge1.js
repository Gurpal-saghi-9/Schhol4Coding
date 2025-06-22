let price = 150;
let quantity = 4;

let totalCost = price * quantity;

let discount = totalCost * (0.1); // 10% discount

let finalCost = totalCost - discount;

console.log("Price per item: $" + price);
console.log("Quantity: " + quantity);
console.log("Total cost before discount: $" + totalCost);
console.log("Discount: $" + discount);
console.log("Final cost after discount: $" + finalCost);
