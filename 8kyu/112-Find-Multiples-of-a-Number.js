function findMultiples(integer, limit) {
    //your code here
    return Array.from({length:(limit - integer) / integer + 1}, (_,i)=>integer+ i*integer);
}

console.log(findMultiples(4, 27));