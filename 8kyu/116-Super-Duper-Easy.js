function problem(x){
    //your code here
    return typeof x == 'number' ? (x*50)+6 : "Error";
  }

  console.log(problem(5));
  console.log(problem("RyanIsCool"));
  console.log(problem(0));