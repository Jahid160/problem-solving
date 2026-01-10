function duplicate(params) {
  const duplicateRemove = new Set(params)
  // const array = new Array[duplicate]
  return console.log([...duplicateRemove]);
}

duplicate([5, 1,1, 9, 3])