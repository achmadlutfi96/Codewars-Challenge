function sumMix(x){
    return x.map((i)=> typeof(i) == 'string'? Number(i) : i).reduce((a,b)=>a+b, 0);
    //alternative
    // return x.map(a => +a).reduce((a, b) => a + b);
}

console.log(sumMix([9, 3, '7', '3']))