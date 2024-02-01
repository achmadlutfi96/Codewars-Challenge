function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}

console.info(paperwork(5,5));
console.info(paperwork(5,-5));