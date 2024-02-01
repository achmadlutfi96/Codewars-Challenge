function past(h, m, s){
    //#Happy Coding! ^_^
    // return new Date(2024, 2, 1, h, m, s).getTime() - new Date(2024, 2, 1).getTime();

    // ALTERNATIVE 1
    // return 1000 * (3600 * h + 60 * m + s);

    return h * 3600000 + m * 60000  + s * 1000;
  }


  console.info(past(0,1,1));
  console.info(past(1,1,1));
  console.info(past(0,0,0));
  console.info(past(1,0,1));