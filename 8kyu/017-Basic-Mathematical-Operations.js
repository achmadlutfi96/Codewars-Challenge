function basicOp(operation, value1, value2){
    //Code   
    if (operation == '+') {
        return value1+value2;
    }
    if (operation == '-') {
        return value1-value2;
    }

    if (operation == '*') {
        return value1*value2;
    }

    if (operation == '/') {
        return value1/value2;
    }

    // Another option using SWITCH CASE
}

console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));