function sum(value) {
  const sumNumber = [...value].reduce((prev,current)=>{
    
    return prev+current
  },0)
return console.log(sumNumber);
}

sum([1,3,34,545,564,45])