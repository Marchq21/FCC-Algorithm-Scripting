function destroyer(arr) {
  const valsToRemoveArr = Array.from(arguments).slice(1);
  return arr.filter(function (val) {
    return !valsToRemoveArr.includes(val);
  });
}

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
