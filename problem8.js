// function capitalize(value) {
//   const a = value.toLowerCase().split(" ");
//   const str = a
//     .map((first) => first.charAt(0).toUpperCase() + first.slice(1))
//     .join(" ");

//   return console.log(str);
// }
// capitalize("hello world");

function filterFn(value) {
  const splitValue = value.toLowerCase().split(" ")
  const filterValue = splitValue.filter((word)=>word !== "")
  const capitalizedWords = filterValue.map(word => word.charAt(0).toUpperCase()+word.slice(1));
  return capitalizedWords.join(" ")
}
console.log(filterFn("hello   world "));