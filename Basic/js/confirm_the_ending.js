// #1
function confirmEnding(str, target) {
  return str.substring(str.length - target.length) == target;
}

// #2
function confirmEndingWithRegex(str, target) {
  const regexPattern = new RegExp(target + "$");
  return regexPattern.test(str);
}

console.log(confirmEnding("Bastian", "n"));
