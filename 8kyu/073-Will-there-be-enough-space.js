function enough(cap, on, wait) {
    // your code here
    return cap >= (on+wait) ? 0 : (wait+on)-cap;
    // alternative
    // return Math.max(wait + on - cap, 0);
}

console.log(enough(10, 5, 5));