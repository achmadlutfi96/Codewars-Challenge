function arrayPlusArray(arr1, arr2) {
    //return arr1.reduce((a,b)=>a+b, 0) + arr2.reduce((a,b)=>a+b, 0); //something went wrong
    // Best Practice
     return [...arr1, ...arr2].reduce((a, b) => a + b, 0);
  }

  console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));