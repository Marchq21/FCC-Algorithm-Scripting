function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((elem) => {
      return elem.substring(0, 1).toUpperCase() + elem.substring(1);
    })
    .join(" ");
}

console.log(titleCase("I'm a little tea pot"));
