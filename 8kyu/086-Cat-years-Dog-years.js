var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    if(humanYears == 1){
        return [humanYears, 15, 15];
    }else if(humanYears == 2){
        return [humanYears, 15+9, 15+9];
    }else {
        return [humanYears, 15+9+((humanYears-2)*4), 15+9+((humanYears-2)*5)]
    }
}

console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(10));