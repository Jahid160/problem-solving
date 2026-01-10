function evenNumber(value) {
  const findEven = [...value].filter((i)=>{
    if(i%2 == 0){
      return i
    }
    
  })
  return console.log(findEven);
}

evenNumber([1,2,3,4,5,6,6])