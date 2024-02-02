function fakeBin(x){
    return x.split('').map(item => Number(item) >= 5 ? '1' : '0').join('');
}

console.info(fakeBin('45385593107843568')); 