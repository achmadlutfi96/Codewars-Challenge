function mergeArrays(arr1, arr2) {
  return [...new Set(arr1.concat(arr2).sort((a,b)=>a-b))];
}

console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]));