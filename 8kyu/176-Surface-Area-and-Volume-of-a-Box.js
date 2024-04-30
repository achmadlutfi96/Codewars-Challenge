function getSize(width, height, depth){
    return [2*((width*height)+(height*depth)+(depth*width)), width*height*depth];
}

console.log(getSize(10, 10, 10));
