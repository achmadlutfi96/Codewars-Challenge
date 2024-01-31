function findNeedle(haystack) {
    // your code here
    // let res = haystack.indexOf("needle");
    // return res ? `found the needle at position ${res}` : `Your function didn't return anything`;

    return `found the needle at position ${haystack.indexOf('needle')}`;
  }

console.info(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));