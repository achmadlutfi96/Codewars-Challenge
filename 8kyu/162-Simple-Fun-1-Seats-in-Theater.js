function seatsInTheater(nCols, nRows, col, row) {
    //coding and coding..
    
    return (nCols-(col-1)) * (nRows-row);
  }

  console.log(seatsInTheater(16,11,5,3))