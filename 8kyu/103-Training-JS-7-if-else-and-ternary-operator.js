function saleHotdogs(n){
    if (n < 5){ 
        return n*100;
    } else if (n >= 5 && n < 10){ 
        return n*95; 
    }else if (n >= 10){ 
        return n*90;
    }

    // Alternative
    // return n*(n<5?100:n<10?95:90);
}

  console.log(saleHotdogs(1));