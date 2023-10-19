// [2] You get an array of numbers, return the sum of all of the positives ones.

let numbers = [1, 2, 3, 4, 5, 5, -5, -6, -7, -9, -8];

//======================= Solution 1 //=======================
/*
function sumOffPosition(arr) {
  let initValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      initValue += arr[i];
    }
  }
  return initValue;
}
console.log(sumOffPosition(numbers)); //20
*/

// =======================  solution 2 =======================

function sumOffPosition(arr) {
  return arr.filter((num) => num > 0).reduce((acc, current) => acc + current);
}

console.log(sumOffPosition(numbers)); //20
