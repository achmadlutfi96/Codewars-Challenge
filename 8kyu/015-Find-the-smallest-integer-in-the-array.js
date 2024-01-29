function findSmallestInt(args) {
    // return Math.min.apply(null, args);

    // Best Practice
    return Math.min(...args);
}

console.info(findSmallestInt([78,56,232,12,8]));
