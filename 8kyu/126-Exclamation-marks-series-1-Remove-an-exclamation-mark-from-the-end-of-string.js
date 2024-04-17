function remove (string) {
    //coding and coding....
    return string.endsWith('!') ? string.slice(0, -1) : string;

    // Alternative
    // return s.replace(/!$/, '');
}

console.info(remove("!Hi!"));