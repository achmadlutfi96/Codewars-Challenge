function sumArray(array) {
    
    // if( array != null ) {
    //     if  (array[0] != null){
    //         if(array.length > 2){
    //             let s = array.sort(function(a, b){return a - b});
    //             s.pop();
    //             s.shift();
    //             return s.reduce((a,b) => a+b, 0);
    //         }   
    //     }
    // }
    // return 0;

    // Best Practice
    return Array.isArray(array) && array.length > 1 ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array) : 0;
}

console.log(sumArray(null));
console.log(sumArray([ ]));
console.log(sumArray([ 3 ]));
console.log(sumArray([ 3, 5 ]));
console.log(sumArray([ 6, 2, 1, 8, 10 ]) );
console.log(sumArray([ 0, 1, 6, 10, 10 ]));