function repeatStr (n, s) {
    // let res = '';
    // for(let i = 0 ; i < n; i++){
    //     res+=s;
    // }
    // return res;

    // Best Practice
    return s.repeat(n);
  }

  console.log(repeatStr(3, "*"));