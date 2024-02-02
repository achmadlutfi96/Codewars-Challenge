// Sum Numbers
function sum (numbers) {
    "use strict";
    // return numbers.length ? numbers.reduce((a, b)=> a+b) : 0;

    // Best Practice
    return numbers.reduce((a, b) => a + b, 0);
    
};

console.info(sum([]));
console.info(sum([1, 5.2, 4, 0, -1]));