function points(games) {
    return games.map(function(i){
        let s = i.split(':');
        if(s[0] > s[1]){
            return 3;
        }
        if(s[0] == s[1]){
            return 1;
        }
        if(s[0] < s[1]){
            return 0;
        }
    }).reduce((a,b) => a+b , 0);

    // alternative
    // return games.reduce((output,current)=>{
    //     return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
    //   },0)

  }

  console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));