function findLongestWordLength(str) {
    let strArray =  str.split(" ");
    let strLength = 0;
    for(let i = 0; i < strArray.length ;i++) {
      if(strLength < strArray[i].length) {
        strLength = strArray[i].length;
      }
    }
    return strLength;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))