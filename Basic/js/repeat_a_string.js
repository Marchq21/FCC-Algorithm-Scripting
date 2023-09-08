function repeatStringNumTimes(str, num) {
    let newStr = str;
    if(num <= 0) {
      return "";
    }
  
    for(let i = 1; i < num; i++) {
      newStr += str;
    }
    return newStr;
  }
  
  console.log(repeatStringNumTimes("abc", 3));