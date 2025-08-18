/*
4. Write a function that returns an array of names of users who have the role “admin”
const users = [
{name: "Alice", role: "admin"},
{name: "Bob", role: "user"},
{name: "Charlie", role: "admin"},
]
*/

const users = [
  { name: "Rahul", role: "admin" },
  { name: "Abhishek", role: "user" },
  { name: "Simran", role: "admin" },
  { name: "Ahil", role: "user" },
  { name: "Minakshi", role: "admin" },
];

function getAdminNames(userArray) {
  return userArray
    .filter(user => user.role === "admin")
    .map(admin => admin.name);
}

// Example usage:
const adminNames = getAdminNames(users);
console.log(adminNames); // Output: ["Alice", "Charlie"]

