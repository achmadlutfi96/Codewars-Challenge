function sumOfDifferences(arr) {
    return arr.length == 0 ? 0 : Math.max(...arr)-Math.min(...arr);
}

console.log(sumOfDifferences([1, 2, 10]));