function tripleTrouble(one, two, three) {
  //Solution
 let res = [];
 for (let i = 0; i < one.length; i++) {
    res+=one[i]+two[i]+three[i];
 }
 return res;

 // Alternative
//  return one.split("").map((letter, index) => letter + two[index] + three[index]).join("");
}

console.log(tripleTrouble("aaa","bbb","ccc"));