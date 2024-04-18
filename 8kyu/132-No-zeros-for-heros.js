function noBoringZeros(n) {
  // your code
  let nums = n.toString().split('');
  for(let i = nums.length-1; i>=0; i--){
    if(nums[i] == 0){
        nums.pop();
    }else{
        break;
    }
  }
  return Number(nums.join(''));

  // ALternative
  // while(n%10==0 && n!=0){n/=10;}
  //   return n;

  // Alternative 2
//   return +`${n}`.replace(/0*$/, "");
}

console.log(noBoringZeros(1050));
console.log(noBoringZeros(960000));