function monkeyCount(n) {
    // your code here
    let res = [];
    for(let i = 1; i <= n; i++){
        res.push(i);
    }
    return res;

    // Alternative
    // return Array.from({length:n}, (_,i)=>i+1)
}

console.log(monkeyCount(5));