const rps = (p1, p2) => {
    let win = 0;
    if(p1 == p2){
        return "Draw!";
    }

    if(p1 == "rock"){
        if(p2 == "scissors"){
            win = 1;
        }
        if(p2 == "paper"){
            win = 2;
        }
    }
    if(p1 == "scissors"){
        if(p2 == "paper"){
            win=1;
        }
        if(p2 == "rock"){
            win = 2;
        }
    }

    if(p1 == "paper"){
        if(p2 == "rock"){
            win = 1;
        }
        if(p2 == "scissors"){
            win=2;
        }
    }

    return `Player ${win} won!`;

    // alternative
    // if (p1 === p2) return "Draw!";
    // var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    // if (p2 === rules[p1]) {
    //   return "Player 1 won!";
    // }
    // else {
    //   return "Player 2 won!";
    // }
};

console.log(rps('rock', 'scissors'));
console.log(rps('scissors', 'rock'));
console.log(rps('rock', 'rock'));