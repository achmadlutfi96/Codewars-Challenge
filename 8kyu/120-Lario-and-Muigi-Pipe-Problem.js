function pipeFix(numbers){
    return numbers.length > 1 ? Array.from({length :(numbers.pop() - numbers[0]+1)}, (_,i)=> numbers[0]+i) : numbers;

    // Alternative
    // return Array.from({ length: numbers.pop() - numbers[0] + 1 }, (v, i) => i + numbers[0]);
}

console.log(pipeFix([6,9]));
console.log(pipeFix([2]));