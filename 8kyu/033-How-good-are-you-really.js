function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    return classPoints.reduce((a,b)=> a+b , yourPoints) / (classPoints.length+1) < yourPoints;
}

console.info(betterThanAverage([2, 3], 5));
console.info(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));