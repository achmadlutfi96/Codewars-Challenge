function invert(array) {
    return array.map(a => a == 0 ? a : -a);
 }

 console.info(invert([1,2,3,4,5]));
 console.info(invert([1,-2,3,-4,5]));
 console.info(invert([]));
 console.info(invert([0]));