//  2. Create a function that takes an object with firstName, middleName, lastName properties and returns the full name.

let data = {
    first_name : "Gurpal",
    middle_name : "Singh",
    last_name : "Saghi"
}

let convertToFullName = (data) => {
    return `Full Name is This : ${data.first_name} ${data.middle_name} ${data.last_name}`
}

Full_Name = convertToFullName(data)

console.log(Full_Name)