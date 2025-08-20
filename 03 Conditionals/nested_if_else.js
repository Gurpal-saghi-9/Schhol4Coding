// Nested If-Else:- Nested if...else means placing one if...else statement inside another to check multiple dependent conditions.

/*
Input age and qualification:
If age ≥ 18
    If qualification is "Graduate" → "Eligible"
    Else → "Not eligible (Education)"
Else → "Not eligible (Age)"
*/
let age = 36;
let qualification = "Graduate";

if (age >= 18) {
  if (qualification == "Graduate") {
    console.log("Eligible");
  } else {
    console.log("Not Eligible");
  }
} else {
  console.log("Not Eligible");
}

/*
Check username first
If username is correct
    Check password
    If correct → "Login successful"
    Else → "Wrong password"
Else → "Wrong username"
*/

let username = "guru123";
let password = "pass123";

// Input values to test
let inputUsername = "guru123";
let inputPassword = "pass123";

if (inputUsername === username) {
  if (inputPassword === password) {
    console.log("Login successful");
  } else {
    console.log("Wrong password");
  }
} else {
  console.log("Wrong username");
}

/*
If number is even
    If divisible by 5 → "Even and divisible by 5"
    Else → "Even but not divisible by 5"
Else → "Not even"
*/
let num = 20; // You can change the number

if (num % 2 === 0) {
  if (num % 5 === 0) {
    console.log("Even and divisible by 5");
  } else {
    console.log("Even but not divisible by 5");
  }
} else {
  console.log("Not even");
}

/*
If marks ≥ 33
    If marks ≥ 75 → "Pass with distinction"
    Else → "Pass"
Else → "Fail"
*/
let marks = 80; // You can change the value to test

if (marks >= 33) {
  if (marks >= 75) {
    console.log("Pass with distinction");
  } else {
    console.log("Pass");
  }
} else {
  console.log("Fail");
}

/*
If user type is "Premium"
    If purchase ≥ 1000 → "20% Discount"
    Else → "10% Discount"
Else
    If purchase ≥ 1000 → "5% Discount"
    Else → "No Discount"
*/
let userType = "Premium";
let purchase = 1200;

if (userType === "Premium") {
  if (purchase >= 1000) {
    console.log("20% Discount");
  } else {
    console.log("10% Discount");
  }
} else {
  if (purchase >= 1000) {
    console.log("5% Discount");
  } else {
    console.log("No Discount");
  }
}

/*
Choose Category (1 for Food, 2 for Drinks)
If Food
Choose Submenu: 1 for Pizza, 2 for Burger
If Drinks
Choose Submenu: 1 for Tea, 2 for Coffe
*/
let category = 2; // 1 for Food, 2 for Drinks
let submenu = 2; // Choose submenu based on category

if (category === 1) {
  // Food category
  if (submenu === 1) {
    console.log("You selected: Pizza");
  } else if (submenu === 2) {
    console.log("You selected: Burger");
  } else {
    console.log("Invalid Food choice");
  }
} else if (category === 2) {
  // Drinks category
  if (submenu === 1) {
    console.log("You selected: Tea");
  } else if (submenu === 2) {
    console.log("You selected: Coffee");
  } else {
    console.log("Invalid Drinks choice");
  }
} else {
  console.log("Invalid Category");
}

/*
If year divisible by 4
    If divisible by 100
        If divisible by 400 → "Leap year"
        Else → "Not a leap year"
    Else → "Leap year"
Else → "Not a leap year"
*/
let year = 2024; // Change the year to test

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("Leap year");
    } else {
      console.log("Not a leap year");
    }
  } else {
    console.log("Leap year");
  }
} else {
  console.log("Not a leap year");
}

/*
If password length ≥ 8
    If contains "@" or "#" → "Strong password"
    Else → "Add special character"
Else → "Too short"
*/
password = "hello@123"; // Change to test

if (password.length >= 8) {
  if (password.includes("@") || password.includes("#")) {
    console.log("Strong password");
  } else {
    console.log("Add special character");
  }
} else {
  console.log("Too short");
}

/*
If room is available
    If customer has valid ID → "Room booked"
    Else → "ID required"
Else → "No rooms available"
*/
let roomAvailable = true;
let hasValidID = true;

if (roomAvailable) {
  if (hasValidID) {
    console.log("Room booked");
  } else {
    console.log("ID required");
  }
} else {
  console.log("No rooms available");
}
