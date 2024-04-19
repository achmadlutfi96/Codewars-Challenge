function warnTheSheep(queue) {
    let sheep=queue.length-queue.findIndex(i=>i=="wolf")-1;
    return sheep != 0 ? `Oi! Sheep number ${sheep}! You are about to be eaten by a wolf!` : "Pls go away and stop eating my sheep";

    // Alternative 1
//   const position = queue.reverse().indexOf('wolf');
//   return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;

    // Alternative 2
    // return q[q.length-1] === 'wolf' ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${q.length - (q.indexOf('wolf')+1)}! You are about to be eaten by a wolf!`
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));