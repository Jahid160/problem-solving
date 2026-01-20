// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

// Example:

// Input: [5, 1, 9, 3]
// Output: 9


function maximum(params) {

  const total = Math.max(...params)

  return console.log(total);
}

maximum([2,3,5,7,4,90,100])