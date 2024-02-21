function finalGrade (exam, projects) {
    let res;
    if(exam > 90 || projects > 10){
        res=100;
    }else if(exam > 75 && projects >= 5){
        res=90;
    }else if(exam > 50 && projects >= 2){
        res=75;
    }else{
        res=0;
    }
    return res// final grade
}

console.log(finalGrade(100, 12));
console.log(finalGrade(85, 5));
