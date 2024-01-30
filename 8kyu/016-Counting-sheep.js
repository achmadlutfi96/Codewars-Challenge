function countSheeps(sheep) {
    // TODO
    // let res = 0;
    // for (const s of sheep) {
    //     if (s) {
    //         res++;
    //     }
    // }
    // return res;

    // Best Practice
    return sheep.filter(Boolean).length;
  }

  console.log(countSheeps([undefined,null,false,true,true,false,null,undefined]));