var summation = function (num) {
    // Code here
    // let res = 0;
    // for(let i=1; i <= num; i++ ){
    //     res += i;
    // }
    // return res;

    // Best Practice
    return num * (num + 1) / 2
  }

  console.log(summation(1));
  console.log(summation(2));
  console.log(summation(8));