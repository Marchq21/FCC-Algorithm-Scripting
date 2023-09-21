function uniteUnique(arr) {
  const finalArray = [];
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (finalArray.indexOf(arguments[i][j]) === -1) {
        finalArray.push(arguments[i][j]);
      }
    }
  }
  return finalArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
