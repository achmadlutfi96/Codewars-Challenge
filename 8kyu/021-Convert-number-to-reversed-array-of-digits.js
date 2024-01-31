function digitize(n) {
    //code here
    // return n.toString().split('').map(s => Number.parseInt(s)).reverse();

    // OR
    return String(n).split('').map(Number).reverse();
  }

  console.log(digitize(35231));