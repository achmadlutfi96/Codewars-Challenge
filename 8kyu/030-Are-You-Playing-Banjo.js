function areYouPlayingBanjo(name) {
    // Implement me
    return name[0] == "R" || name[0] == "r" ? `${name} plays banjo` : `${name} does not play banjo`;

    // alternative
    // return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

console.info(areYouPlayingBanjo("Adam"));
console.info(areYouPlayingBanjo("Paul"));
console.info(areYouPlayingBanjo("Ringo"));
console.info(areYouPlayingBanjo("rolf"));