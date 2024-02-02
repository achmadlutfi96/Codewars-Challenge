function countPositivesSumNegatives(input) {
    // your code here
    if(input){
        return input.length ? [input.filter(x => x > 0).length , input.filter(y => y < 0).reduce((a, b)=> a+b, 0)] : [];
      }else{
        return [];
      }
  }

console.info(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.info(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
