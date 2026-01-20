// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// Example:

// Input: "programming"
// Output: 3

function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";

  for (let i of str.toLowerCase()) {
    if (vowels.includes(i)) {
      count++;
    }
  }
  return console.log(count);
}

countVowels("programmiffdguidgng"); 
