// #1
function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const charArray = [];
  let firstCharIndex = alphabet.indexOf(str[0]);
  for (let i = firstCharIndex; i <= str.length + firstCharIndex; i++) {
    charArray.push(alphabet[i]);
  }
  let missingLetters = charArray
    .filter((char) => str.indexOf(char) === -1)
    .join(" ");
  return missingLetters !== "" ? missingLetters : undefined;
}

// #2 Find the missing letter using the charCodeAt() method 
function fearNotLetter2(str) {
  let currCharCode = str.charCodeAt(0);
  let missing = undefined;

  str.split("").forEach((letter) => {
    console.log(currCharCode);
    if (letter.charCodeAt(0) === currCharCode) {
      currCharCode++;
    } else {
      missing = String.fromCharCode(currCharCode);
    }
  });

  return missing;
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
