// [1] Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function checkEvenOrOdd(number) {
  return number % 2 == 0 ? "Even" : "Odd";
}
console.log(checkEvenOrOdd(10)); //Even
