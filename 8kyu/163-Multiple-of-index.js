function multipleOfIndex(array) {
  // good luck
  return array.filter((v, i)=> v == 0 || (i != 0 && v%i == 0));

  // ALternative
//   return array.filter((element, index) => element % index == 0 || element == 0);
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
