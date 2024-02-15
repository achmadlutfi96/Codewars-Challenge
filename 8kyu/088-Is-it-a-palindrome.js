function isPalindrome(x) {
    // your code here
    return x.split('').reverse().join('').toLowerCase() == x.toLowerCase();
}

console.log(isPalindrome("a"));
console.log(isPalindrome("Abba"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("Madam"));