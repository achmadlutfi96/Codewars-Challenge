function lovefunc(flower1, flower2){
    // moment of truth
    return  flower1%2 == 0 != flower2%2 == 0;

  }

  console.info(lovefunc(1,4));
  console.info(lovefunc(2,2));
  console.info(lovefunc(0,1));
  console.info(lovefunc(0,0));