// [2] You get an array of numbers, return the sum of all of the positives ones.

let numbers = [1, 2, 3, 4, 5, 5, -5, -6, -7, -9, -8];

//======================= Solution 1 //=======================
/*
function sumOffPositivesNumbers(arr) {
  let initValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      initValue += arr[i];
    }
  }
  return initValue;
}
console.log(sumOffPositivesNumbers(numbers)); //20
*/

// =======================  solution 2 ======================

// function sumOffPositivesNumbers(arr) {
//   return arr.filter((num) => num > 0).reduce((acc, current) => acc + current);
// }

// console.log(sumOffPositivesNumbers(numbers)); //20

// ======================= solution 3 =======================
const sumOffPositivesNumbers = (arr) => {
  return arr.reduce((accumulator, currentValue) => {
    currentValue > 0 && (accumulator += currentValue);
    return accumulator;
  }, 0);
};
console.log(sumOffPositivesNumbers([1, 2, 3, 4, 5, -5]));
