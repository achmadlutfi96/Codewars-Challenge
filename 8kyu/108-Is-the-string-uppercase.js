String.prototype.isUpperCase = function() {
    // your code here
    return this.toUpperCase() == this;
}

console.log('c'.isUpperCase());
console.log('C'.isUpperCase());