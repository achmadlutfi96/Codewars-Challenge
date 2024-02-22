function stringy(size) {
    // your code here 
    return Array.from({length: size}, (_, i) => (i+1)%2==1 ? '1':'0').join('');
    
    // Alternative
    // return ''.padStart(x,'10');
    // OR
    // return "10".repeat(size).slice(0,size);
}

console.log(stringy(3));