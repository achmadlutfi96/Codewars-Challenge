function updateLight(current) {
  
    //your code here!
    // return current == "green" ? "yellow" : current == "yellow" ? "red" : "green";

    // Alternative
    
    return {green: "yellow", yellow : "red", red : "green"}[current];
  }

  console.log(updateLight("green"));
  console.log(updateLight("yellow"));
  console.log(updateLight("red"));