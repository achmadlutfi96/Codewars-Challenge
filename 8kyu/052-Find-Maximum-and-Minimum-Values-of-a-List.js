var min = function(list){
    
    return Math.min(...list);
}

var max = function(list){
    
    return Math.max.apply(null, list);
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([4,6,2,1,9,63,-134,566]));