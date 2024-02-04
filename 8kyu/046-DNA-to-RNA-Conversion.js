function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    return dna.split('').map(i => i == 'T' ?  i='U' : i ).join('');

    // alternative
    // return dna.replace(/T/g, 'U');
    // return dna.replaceAll('T','U');
  }

console.log(DNAtoRNA("TTTT"));