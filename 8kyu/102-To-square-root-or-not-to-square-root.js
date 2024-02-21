function squareOrSquareRoot(array) {
    return array.map(i=> Math.pow(Math.floor(Math.sqrt(i)),2) == i ? Math.sqrt(i) : Math.pow(i,2));
    // Alternative
    // return array.map(a => Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : (a * a));  
}

console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]));