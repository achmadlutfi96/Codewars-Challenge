function solution(str){
//    let res = '';
//    for( let i = str.length-1 ; i >= 0 ; i--){
//      res+=str[i];
//    }

//    return res;

    // Best Practice
    return str.split('').reverse().join('');
}

console.log(solution('world'));
console.log(solution(''));


// Meaning:
// 1- .split('') method splits a string into an array of strings exemple : "hello".split('') ==> Output : ['h','e','l','l','o']
// 2- .reverse() method to reverse order of an array ===> Output : ['o','l','l','e','h']
// 3- .join('') is to combine elements of an array into one single string and return it ===> Output : 'olleh'