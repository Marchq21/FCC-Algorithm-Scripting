function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return (num = arr[i]);
    }
  }
  return undefined;
}

console.log(findElement([1, 2, 5, 10], (num) => num % 2 === 0));
