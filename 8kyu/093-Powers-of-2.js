function powersOfTwo(n){
    let res = []

    for(let i=0; i<=n;i++){
        res.push(Math.pow(2, i));
    }

    return res;

    // Alternative
    // return Array.from({length: n + 1}, (v, k) => 2 ** k);
    
}

console.log(powersOfTwo(4))