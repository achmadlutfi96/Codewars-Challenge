const reverseSeq = n => {
    let res = [];
    for(let i = n; i > 0; i--){
        res.push(i);
    }
    return res;

    // alternative
    // return Array(n).fill(0).map((e, i) => n - i );
};

console.info(reverseSeq(5));