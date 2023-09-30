function smallestCommons(arr) {
  let [minVal, maxVal] = arr.sort((a, b) => a - b);
  let range = [];
  for (let i = minVal; i <= maxVal; i++) {
    range.push(i);
  }
  const gcm = range.reduce((prev, next) => prev * next);

  for (let multiple = maxVal; multiple <= gcm; multiple += maxVal) {
    const divisible = range.every((value) => multiple % value === 0);
    if (divisible) return multiple;
  }
  return arr;
}

console.log(smallestCommons([1, 15]));
