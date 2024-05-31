function remove(string) {  
    while(string.endsWith("!")){
        string = string.slice(0,-1);
    }
    return string;

    // Alternative
    // return s.replace(/!+$/, '');
  }

  console.log(remove("!Hi!!!!!!"));
  