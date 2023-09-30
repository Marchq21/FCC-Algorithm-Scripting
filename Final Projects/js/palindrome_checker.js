function palindrome(str) {
  str = str.replace(/[\W_]/g, "").toLowerCase();
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  console.log(str);
  return str === reversedStr;
}

console.log(palindrome("1 eye for of 1 eye."));
