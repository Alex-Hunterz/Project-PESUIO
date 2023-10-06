function bmi(w, h) {
  return w / h ** 2;
}

// console.log(bmi(50, 1.8));

const bmi_Arr = (w, h) => w / (h * h);
console.log(bmi_Arr(50, 1.8));

const greet = (name) => `hello ${name}`;
console.log(greet("DAVID"));
