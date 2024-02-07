function removeExclamationMarks(s) {
    //return s.split('').filter(i => i != '!').join('');

    // alternative
    // return s.split('!').join('');
    return s.replace("!","");
}

console.log(removeExclamationMarks("Hello World!"));