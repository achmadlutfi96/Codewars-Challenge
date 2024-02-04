function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    return dna.split('').map(i => i == 'T' ?  i='U' : i ).join('');
  }

console.log(DNAtoRNA("TTTT"));