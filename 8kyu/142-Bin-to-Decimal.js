function binToDec(bin) {
  // TODO
  return bin.split('').reverse().map((b,i)=>b == '0' ? 0 : Math.pow(2, i)).reduce((a,b)=>a+b);

  // Alternative 
//   return parseInt(bin,2);
}

console.log(binToDec('1001001'));
console.log(binToDec('10'));