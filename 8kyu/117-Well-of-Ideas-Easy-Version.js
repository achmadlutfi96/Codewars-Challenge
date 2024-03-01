function well(x){
    let res = x.filter(i=>i=="good").length;
    return res > 2? "I smell a series!" : res > 0 ? "Publish!" : "Fail!";
}

console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));