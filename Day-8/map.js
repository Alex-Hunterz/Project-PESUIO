const arr = [1, 2, 3, 4, 5];
console.log(arr);

// let arr_Sq = [];

// for (let i = 0; i < arr.length; i++) {
//   console.log(i);
//   arr_Sq.push(arr[i] ** 2);
// }

// console.log(arr_Sq);

let arr_Sq = arr.map((a) => a ** 3);
console.log(arr_Sq);
