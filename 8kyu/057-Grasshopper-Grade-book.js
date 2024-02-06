function getGrade (s1, s2, s3) {
    // Code here
    let avg = (s1+s2+s3)/3;
    if(avg >= 90){
        return 'A';
    }else if(avg >= 80){
        return 'B';
    }else if(avg >= 70){
        return 'C';
    }else if(avg >= 60){
        return 'D';
    }else {
        return 'F';
    }

    // alternative
    // let s = (s1 + s2 + s3) / 3
    // return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
    
  }

  console.log(getGrade(95,90,93));
  console.log(getGrade(82,85,87));