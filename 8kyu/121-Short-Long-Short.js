function solution(a, b){
  // your code here
  return a.length < b.length ? a+b+a : b+a+b;
}

console.log(solution('45', '1'));