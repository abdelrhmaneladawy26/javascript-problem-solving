/**
 DESCRIPTION:
Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
 */

//======================= Solution 1 //=======================

// function countPositivesSumNegatives(input) {
//   if (!Array.isArray(input) || !input.length) return [];
//   let negativeNumber = 0;
//   let positiveNumberCount = [];
//   let result = [];
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] < 0) {
//       negativeNumber += input[i];
//     } else if (input[i] > 0) {
//       positiveNumberCount.push(input[i]);
//     }
//   }

//   return [positiveNumberCount.length, negativeNumber];
// }
// console.log(
//   countPositivesSumNegatives([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
//   ])
// );

//======================= Solution 2 //=======================
function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || !input.length) return [];
  const positiveNumberCount = input.filter((num) => num > 0).length;
  const negativeNumberCount = input
    .filter((num) => num < 0)
    .reduce((acc, current) => acc + current, 0);
  return [positiveNumberCount, negativeNumberCount];
}
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
