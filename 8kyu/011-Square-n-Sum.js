function squareSum(numbers){
    // let res = 0;
    // for (let n of numbers) {
    //     res += n ** 2;
    // }
    // return res;

    // Best Practice
    return numbers.reduce((sum,num) => sum + (num * num), 0);
}

console.log(squareSum([1,2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));