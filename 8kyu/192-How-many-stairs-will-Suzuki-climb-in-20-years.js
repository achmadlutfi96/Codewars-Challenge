function stairsIn20(s){
    //your code here
    return s.map(x=>x.reduce((a,b)=>a+b, 0)).reduce((a,b)=>a+b, 0) * 20;

    // alternative
    // return 20 * a.reduce((s, a) => s + a.reduce((s, n) => s + n, 0), 0);
  }