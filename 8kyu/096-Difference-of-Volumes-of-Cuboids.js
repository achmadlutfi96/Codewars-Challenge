function findDifference(a, b) {
    //loading...
    // Math.abs() function is for absolute integer
    return Math.abs(a.reduce((i,j)=>i*j) - b.reduce((i,j)=>i*j));
}

  console.log(findDifference([3, 2, 5], [1, 4, 4]));
  console.log(findDifference([9, 7, 2], [5, 2, 2]));
  console.log(findDifference([11, 2, 5], [1, 10, 8]));
  console.log(findDifference([4, 4, 7], [3, 9, 3]));
  console.log(findDifference([15, 20, 25], [10, 30, 25]));