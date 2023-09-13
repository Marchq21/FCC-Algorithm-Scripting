function mutation(arr) {
  const firstElem = arr[0].toLowerCase();
  const secondElem = arr[1].toLowerCase();
  for (let i = 0; i < secondElem.length; i++) {
    if (firstElem.indexOf(secondElem[i]) < 0) return false;
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
