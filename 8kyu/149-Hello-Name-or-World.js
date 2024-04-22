function hello(name="World") {
    let res = name.length ? name[0].toUpperCase()+name.slice(1).toLowerCase() : "World";
    return `Hello, ${res}!`;

    // Alternative
    // return `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;
  }

  console.log(hello(''));
  console.log(hello('alice'));
  console.log(hello());