function largestOfFour(arr) {
  let maxArray = [];
  for (let subArr of arr) {
    maxArray.push(Math.max(...subArr));
  }
  return maxArray;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
