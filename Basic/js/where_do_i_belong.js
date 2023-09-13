// #1
function getIndexToIns(arr, num) {
  arr.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}

// #2
function getIndexToIns2(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => {
      return a - b;
    })
    .indexOf(num);
}
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
