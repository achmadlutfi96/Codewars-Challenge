function strCount(str, letter){  
    //code here
    return str.split('').filter(i=> i==letter).length;
}

console.log(strCount('Hello', 'o'));
console.log(strCount('Hello', 'l'));
console.log(strCount('',      'z'));