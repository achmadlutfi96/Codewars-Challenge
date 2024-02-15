String.prototype.toAlternatingCase = function () {
    // Define your method here :)
    return this.split('').map(a=> /[A-Z]/.test(a) ? a.toLowerCase() : a.toUpperCase()).join('');
    // alternative
    // return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
  }

  console.log("hello world".toAlternatingCase());
  console.log("HELLO WORLD".toAlternatingCase());