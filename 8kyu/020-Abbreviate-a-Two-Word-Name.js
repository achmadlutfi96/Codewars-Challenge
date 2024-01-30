function abbrevName(name){

    // code away
    return name.split(' ').map((item) => item.slice(0,1)).join('.').toUpperCase();

}

console.log(abbrevName("Sam Harris"));

// 1. The split() method splits a string into an array of substrings
// 2. The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
// 3. slice() extracts a part of a string and returns the extracted part in a new string.
// 4. The join() method also joins all array elements into a string. 
// 5. A string is converted to upper case with toUpperCase()