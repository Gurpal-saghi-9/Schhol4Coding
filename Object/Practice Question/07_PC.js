/*
7. Write a function buildQuery(params) that returns
a query string from an object of parameters.
*/

let params = {
    search : "laptop",
    page : 2,
    sort : "price"
}

function createURL(params){
    // return `search=${params.search}&page=${params.page}&sort=${params.sort}`

    let url = "";
    for (let key in params){
        url = url + `${key}=${params[key]}&`
    }
    let finalURL = url.slice(0,url.length-1)
    return finalURL 
    
    
}

let fullURL = "https://example.com?" + createURL(params);
console.log(fullURL);


