/*
Write a function searchProducts(products, keyword) that returns an array of products whose name
includes the given keyword (case-insensitive)
*/

function searchProducts(products, keyword) {
    let result = products.filter(function(product) {
        return product.name.toLowerCase().includes(keyword.toLowerCase());
    });
    
    return result; 
}

let products = [
    {id: 1, name: "Samsung"},
    {id: 2, name: "Realme"},
    {id: 3, name: "Redmi"},
    {id: 4, name: "Nothing"},
    {id: 5, name: "Oppo"},
    {id: 6, name: "Vivo"}
];

let matchedProducts = searchProducts(products, "m");

console.log(matchedProducts);
