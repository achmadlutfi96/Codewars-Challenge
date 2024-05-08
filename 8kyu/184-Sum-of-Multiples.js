function sumMul(n,m){
    //your idea here
    return n < m ? Array.from({ length: ((m-1) - n)/n+1 }, (_, i) => n + i*n).reduce((a,b) => a+b, 0) : "INVALID";
}

console.log(sumMul(2,9));