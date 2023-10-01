function addTogether() {
  const [firstArg, secondArg] = arguments;

  if (typeof firstArg === "number") {
    if (arguments.length === 1) return addSecond;
    if (arguments.length === 2) return addSecond(secondArg);
  }

  function addSecond(secondArgm) {
    if (typeof secondArgm === "number") return firstArg + secondArgm;
  }
}

console.log(addTogether(5, 8));

let someTwoAnd = addTogether(2);
console.log(someTwoAnd(9));
