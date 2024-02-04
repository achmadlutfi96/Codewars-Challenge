function countBy(x, n) {
    // let z = [];
    // let r = 0;
    // for(let i = 0 ; i < n ; i++){
    //     z.push(r+=x);
    // }
    // return z;

    // Best Practice
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;

    // Clever
    // return Array.from({length: n}, (v, k) => (k + 1) * x)
  }


  console.log(countBy(1,10));
  console.log(countBy(2,5));