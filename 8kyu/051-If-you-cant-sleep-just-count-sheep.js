var countSheep = function (num){
    //your code here
    return Array.from({length : num}, (_, k) => `${++k} sheep...`).join('');

    // alternative
    // return [...Array(n)].map((_,i)=>`${i+1} sheep...`).join``;
  }

  console.log(countSheep(0));
  console.log(countSheep(1));
  console.log(countSheep(3));