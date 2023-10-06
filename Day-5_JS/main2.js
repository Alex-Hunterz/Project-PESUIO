// let email = "MANUTD@@gmail.com";

// console.log(id.length);
// if (id.includes("@")) {
//   console.log("has @");
//   id.toLowerCase();
//   email = id.trim();
//   console.log(email);
// } else {
//   console.log("missing @");
// }

// let parts = email.split("@");
// if (parts == 2) {
//   console.log("You have entered a valid id");
// } else {
//   console.log("That's the wrong email son");
// }
// console.log(parts.length);
//Array-same datatypes list-diff datatypes

let arr = ["man", "stop it", "get some", "help", "help"];
console.log(arr.length);

const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);

//object -key:value pairs
let user_details = [
  {
    name: "adarsh",
    email: "name@gmail.com",
  },
  {
    name: "manit",
    email: "namemail.com",
  },
];

user_details.map((user) => {
  let email = user.email;
  console.log(user.name);
  console.log(email);
});
