function elevator(left, right, call){
    // code on! :)
    return Math.abs(call-right) <= Math.abs(call-left) ? "right" : "left";
  }
console.log(elevator(0,1,1));