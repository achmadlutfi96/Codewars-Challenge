function removeChar(str){
    //You got this!
//    return str.substring(1, str.length-1);
    
    // another
    return str.slice(1, -1);
};

console.log(removeChar('eloquent'));