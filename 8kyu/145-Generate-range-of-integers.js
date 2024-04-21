function generateRange(min, max, step){
    return Array.from({ length: (max - min) / step + 1 }, (_, i) => min + i * step);

    // Alternative
    // return min > max ? [] : [min, ...generateRange(min + step, max, step)];
}
console.log(generateRange(2, 10, 2));