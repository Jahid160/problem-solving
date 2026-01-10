function Factorial (value) {
  const arr = Array.from({ length: value }, (_, i) => i + 1);
    const factorial = arr.reduce((prev,current)=>{
    
    return prev*current
  },1)
return factorial
}

console.log(Factorial (3));

