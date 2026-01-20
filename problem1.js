// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

// Example:

// Input: "hello"
// Output: "olleh"

function Reverse(value) {

  const ReverseValue = [...value].reverse().join("")
  console.log(ReverseValue);

}

Reverse("hello")
