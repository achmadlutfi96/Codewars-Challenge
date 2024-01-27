function smash (words) {
    // let res = "";
    // for (const key in words) {
    //     res += words[key];
    //     if (key != words.length-1) {
    //         res += " ";
    //     }
    // }
    // return res;

    // BEST PRACTICE
    return words.join(" ");
 };


 console.log(smash(["hello", "world"]));