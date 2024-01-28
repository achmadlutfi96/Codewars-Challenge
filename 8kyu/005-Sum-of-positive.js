function positiveSum(arr) {
    // let res = 0; 
    // for (const a of arr) {
    //     if(a > 0){
    //         res += a;
    //     }
    // }
    // return res;

    // Best Practice
    return arr.reduce((acc,curr)=> acc + (curr > 0 ? curr : 0),0);
}

console.log(positiveSum([1,2,3,4,5]));
console.log(positiveSum([]));
console.log(positiveSum([-1,2,3,4,-5]));