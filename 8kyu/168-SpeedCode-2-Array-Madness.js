function arrayMadness(a, b) {
  // Ready, get set, GO!!!
  return a.map(i=>Math.pow(i,2)).reduce((a,b)=>a+b) > b.map(i=>Math.pow(i,3)).reduce((a,b)=>a+b);

  // Alternative
  // return a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0);
}

console.log(arrayMadness([1,2,3],[0,1,2]));