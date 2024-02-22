function expressionMatter(a, b, c) {

    return Math.max(a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c)// highest achievable result
}

console.log(expressionMatter(2, 1, 2));
console.log(expressionMatter(1, 1, 1));
console.log(expressionMatter(5, 1, 3));