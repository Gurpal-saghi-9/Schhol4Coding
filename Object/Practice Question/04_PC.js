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
  { name: "Guru", role: "SuperAdmin" },
  { name: "Simran", role: "admin" },
  { name: "Ahil", role: "user" },
  { name: "Minakshi", role: "admin" },
  { name: "Raj", role: "SuperAdmin" },
  { name: "Deep", role: "user" },
];

// let filtered_item = users.filter((item) => {
//   return item.role === "admin";
// });

// let result = filtered_item.map((item) => {
//   return item.name;
// });
// console.log(result);

function filteredArray(item, role) {
  let filtered_item = users.filter((item) => {
    return item.role === role;
  });

  let result = filtered_item.map((item) => {
    return item.name;
  });
  return result;
}

let result_Array = filteredArray(users, "admin");
console.log(result_Array);
