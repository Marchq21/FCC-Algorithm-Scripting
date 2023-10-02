function rot13(str) {
  let newStr = str.split("");
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let halfLength = alphabet.length / 2;
  for (let i = 0; i < newStr.length; i++) {
    if (alphabet.indexOf(newStr[i]) !== -1) {
      if (alphabet.indexOf(newStr[i]) < halfLength) {
        newStr[i] = alphabet[alphabet.indexOf(str[i]) + halfLength];
      } else {
        newStr[i] = alphabet[alphabet.indexOf(str[i]) - halfLength];
      }
    }
  }
  return newStr.join("");
}

console.log(rot13("SERR PBQR PNZC"));
