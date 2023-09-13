function bouncer(arr) {
  return arr.filter((item) => {
    return Boolean(item) !== false;
  });
}

console.log(bouncer([7, "ate", "", false, 9]));
