function greet (name, owner) {
    // Add code here
    return name == owner ? `Hello boss` : `Hello guest`;
}

console.log(greet('Daniel', 'Daniel'));