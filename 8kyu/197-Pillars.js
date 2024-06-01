function pillars(numPill, dist, width) {
    // your code here
    let num = numPill-1;
    let flPillar = numPill <= 2 ? 0 : ((numPill-2)*width);
    return (num*dist*100)+flPillar;
  }

  console.log(pillars(2, 20, 25))