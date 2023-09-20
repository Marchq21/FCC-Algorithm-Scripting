function pairElement(str) {
  const PAIRS = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  return str.split("").map((char) => {
    return [char, PAIRS[char]];
  });
}

console.log(pairElement("GCG"));
