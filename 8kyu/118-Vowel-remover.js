function shortcut (string) {
    let vow = ['a', 'i', 'u', 'e', 'o'];
    return string.split('').filter(i=>!vow.includes(i)).join('');

    // Alternative
    // return string.replace(/[aeiou]/g, '')
  }

console.log(shortcut('hello'));