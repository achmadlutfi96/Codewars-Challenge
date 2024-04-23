const flip=(d, a)=>{
    //TODO
    return d == 'R' ? a.sort((a,b)=>a-b) : a.sort((a,b)=>a-b).reverse();

    // Alternative
    // return a.sort((x, y) => d === 'R' ? x - y : y - x);
  }

  console.log(flip('R', [3, 2, 1, 2]))