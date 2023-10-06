// function any_name(email) {
//     console.log("Functions are cool");
//     console.log("My email is: ", email);
// }

// function isValidEmail(email) {
//   //   console.log("Functions are cool");
//   //   console.log("My email is: ", email);
//   if (email.includes(".com") && email.includes("@")) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isValidEmail("manutd@gmail.com"));
// console.log(isValidEmail("stoic"));

let menu = {
  food: "Pizza",
  beverage: "Prime",
  snacks: "Patties",
};

function detail({ food, beverage }) {
  console.log(`I like to eat ${food} and drink ${beverage}`);
}

detail(menu);
