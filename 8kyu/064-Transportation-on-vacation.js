function rentalCarCost(d) {
    // Your solution here
    if(d >= 7){
        return d*40-50;
    }else if(d >= 3){
        return d*40-20;
    }else{
        return d*40;
    }

    // alternative
    // return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
  }

  console.log(rentalCarCost(3));