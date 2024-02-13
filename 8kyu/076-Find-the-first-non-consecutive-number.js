function firstNonConsecutive (arr) {
    for(let i = 0 ; i<arr.length; i++){
        if(arr[i+1]-arr[i] > 1){
            return arr[i+1];
        }
    }
    return null;

    // Alternative
    // return arr.find((v, i) => v != i + arr[0]) ?? null;
}

console.log(firstNonConsecutive([1,2,3,4,6,7,8]));
console.log(firstNonConsecutive([-9,-8,-7,-5,-4,-2,-1,0]));
console.log(firstNonConsecutive([-8,-7,-5,-4,-3,-1,0,1]));