function stringClean(s){
    // Function will return the cleaned string
    return s.replaceAll(/[0-9]/g, "");

    // Alternative
    // return s.replace(/\d/g, "");
}

console.log(stringClean("(E3at m2e2!!)"));