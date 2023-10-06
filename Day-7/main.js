// console.log("hello");

let height = document.getElementById("height");
let weight = document.getElementById("weight");

function bmi_calculator(h, w) {
  //   bmi = w1 / h1 ** 2;
  bmi = w / (h * h);
  return bmi;
}

// console.log(bmi_calculator(2, 2));

function handleClick() {
  // console.log(height.value);
  // console.log(weight.value);

  if (height.value == "" || weight.value == "") {
    console.error("Give values");
    return;
  }

  let h_ = parseFloat(height.value);
  let w_ = parseFloat(weight.value);

  console.log(bmi_calculator(h_, w_));

  result.textContent = bmi;
}
