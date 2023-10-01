function truthCheck(collection, pre) {
  let isTrueCount = 0;
  for (let item in collection) {
    if (
      collection[item].hasOwnProperty(pre) &&
      !!collection[item][pre]
    ) {
      isTrueCount++;
    }
  }
  return isTrueCount == collection.length;
}

function truthCheckWithEvery(collection, pre) {
  return collection.every((item)=> {
    return item[pre];
  });
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "name"
  )
);
