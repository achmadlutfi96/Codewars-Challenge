function capitalizeWord(word) {
  return word[0].toUpperCase() + word.substring(1, word.length);
  // Alternative 
  // return word[0].toUpperCase()+word.slice(1);
}

console.info(capitalizeWord('glasswear'));