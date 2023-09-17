function translatePigLatin(str) {
  const consonantRegex = /^[^aeiou]+/;
  const myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str.replace(myConsonants, "").concat(myConsonants).concat("ay")
    : str.concat("way");
}

console.log(translatePigLatin("glove"));
