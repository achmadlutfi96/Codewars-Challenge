function calculateAge(birth, yearTo) {
    // enter your code here.
    let age = yearTo - birth;
    if(age > 0){
        return `You are ${age} ${age == 1 ? "year" : "years" } old.`;
    }else if(age < 0){
        age = Math.abs(age);
        return `You will be born in ${age} ${age == 1 ? "year":"years"}.`;
    }else{
        return "You were born this very year!";
    }
}

console.log(calculateAge(900, 2900));
