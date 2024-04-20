function addLength(str) {
  //start-here
  return str.split(' ').map(s=> `${s} ${s.length}`);
}

console.log(addLength("apple ban"));
