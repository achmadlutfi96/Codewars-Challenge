function isDivisible(n, x, y) {
  
  return n%x == 0 && n%y == 0;
}

console.info(isDivisible(3,3,4));
console.info(isDivisible(12,3,4));
console.info(isDivisible(48,3,4));