function bmi(weight, height) {
    let res = weight/(height*height);
    if(res <= 18.5){
        return "Underweight";
    }else if(res <= 25.0){
        return "Normal";
    }else if(res <= 30.0 ){
        return "Overweight";
    }else{
        return "Obese";
    }
    
  }

  console.log(bmi(80, 1.80));
  console.log(bmi(64, 1.71));