function peopleWithAgeDrink(old) {
    if(old < 14){
        return "drink toddy";
    }else if(old < 18){
        return "drink coke";
    }else if(old < 21){
        return "drink beer";
    }else{
        return "drink whisky";
    }

    // Alternative
    // return `drink ${old < 14 ? `toddy` : old < 18 ? `coke` : old < 21 ? `beer` : `whisky`}`;
};

console.info(peopleWithAgeDrink(22));