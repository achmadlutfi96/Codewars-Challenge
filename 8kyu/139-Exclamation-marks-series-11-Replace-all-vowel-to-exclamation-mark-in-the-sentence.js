function replace(s) {
  //coding and coding....
  let vow = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return s
    .split("")
    .map((a) => (vow.includes(a) ? "!" : a))
    .join("");

  // Alternative
  // return s.replace(/[aeoiu]/ig, '!')
}

console.log(replace("ABCDE"));
