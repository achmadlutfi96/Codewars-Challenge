function between(a, b) {
    // your code here
    let res = [];
    for(let i=a; i<=b; i++){
        res.push(i);
    }
    return res;

    // Alternative
    // Array.from(new Array(b-a+1), (_, i) => a + i);
}

console.log(between(1, 4));