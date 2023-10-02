function convertToRoman(num) {
  let romanNumeraL = "";
  const romanToNumber = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  for (const key in romanToNumber) {
    while (num >= romanToNumber[key]) {
      romanNumeraL += key;
      num -= romanToNumber[key];
    }
  }
  return romanNumeraL;
}

console.log(convertToRoman(43));
