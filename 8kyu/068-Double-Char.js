function doubleChar(str) {
    // Your code here
    return str.split('').map(i=>i.repeat(2)).join('');
  }

console.log(doubleChar("abcd"));