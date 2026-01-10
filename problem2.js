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
