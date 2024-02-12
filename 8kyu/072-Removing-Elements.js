function removeEveryOther(arr){
    //your code here
    return arr.filter((v, i)=> i % 2 == 0);
    // alternative
    // arr.filter((_, i) => !(i % 2));
  }

  console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));