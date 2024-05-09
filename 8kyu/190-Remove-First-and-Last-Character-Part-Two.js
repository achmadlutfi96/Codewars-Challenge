function array(string) {
    // TODO
    let arr = string.split(',');
    if(arr.length <= 2) {
        return null;
    }
    arr.pop();
    arr.shift();
    return arr.join(' ');

    // alternative
    // return arr.split(",").slice(1,-1).join(" ") || null;
  }

  console.log(array('1,2,3,4'));