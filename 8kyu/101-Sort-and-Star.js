function twoSort(s) {
    return s.sort().find((_,i)=>i==0).split("").join("***");
    // Alternative
    // return s.sort()[0].split('').join('***');
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));