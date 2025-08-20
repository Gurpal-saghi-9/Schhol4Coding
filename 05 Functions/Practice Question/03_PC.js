// Make an arrow function that takes a price and a discount, and returns the price after discount.

let price = 10000;
let discount = 20;


let calculateDiscountedPrice = (price, discount) =>{
    let discountedPrice = price - price*(discount/100);
    return discountedPrice
}

let result = calculateDiscountedPrice(10000, 20);
console.log(result);
result = calculateDiscountedPrice(70000, 25);
console.log(result);

