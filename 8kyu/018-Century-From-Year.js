function century(year) {
    // Finish this :)
    //using ceiling method to round up to nearest century (100)
    return Math.ceil(year/100); // pembulatan ke atas
  }

  // convert year to century

console.log(century(1705)); // 18
console.log(century(1601)); // 17
console.log(century(1900)); // 19
