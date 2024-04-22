var replaceDots = function (str) {
  return str.replaceAll(".", "-");

  // ALternative
  // return str.replace(/\./g,'-');
};

console.log(replaceDots("one.two.three"));