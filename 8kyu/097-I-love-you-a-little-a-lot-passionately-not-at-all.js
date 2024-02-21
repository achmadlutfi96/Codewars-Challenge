function howMuchILoveYou(nbPetals) {
    // your code
    switch(nbPetals%6){
        case 0 : return "not at all";
        case 1 : return "I love you";
        case 2 : return "a little";
        case 3 : return "a lot";
        case 4 : return "passionately";
        case 5 : return "madly";
    }
}

console.log(howMuchILoveYou(7));
console.log(howMuchILoveYou(3));