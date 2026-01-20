// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

// Example:

// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

function duplicate(params) {
  const duplicateRemove = new Set(params)
  // const array = new Array[duplicate]
  return console.log([...duplicateRemove]);
}

duplicate([5, 1,1, 9, 3])