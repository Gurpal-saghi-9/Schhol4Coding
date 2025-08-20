// Create a function that builds a username from a full name.

function generateUserName(fullname) {
    return '@' + fullname.trim().toLowerCase().replace(/\s+/g, '_');
}

console.log(generateUserName("Gurpal Singh"));  // Output: @gurpal_singh
