function myReplace(str, before, after) {
  let regex = /^[A-Z]/;
  if (regex.test(before)) {
    return str.replace(before, after[0].toUpperCase().concat(after.slice(1)));
  }
  return str.replace(before, after.toLowerCase());
}

console.log(myReplace("Let us go to the store", "Store", "mall"));
