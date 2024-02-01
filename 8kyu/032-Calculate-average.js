function findAverage(array) {
    // your code here
    return array.length ? array.reduce((a,b) => a + b) / array.length : 0 ;
  }

  console.info(findAverage([1,1,1]));
  console.info(findAverage([1,2,3]));
  console.info(findAverage([1,2,3,4]));