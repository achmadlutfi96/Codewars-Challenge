function correct(string)
{
	// your code here
    // return string.split('').map(function(i){
    //     switch(i){
    //         case '0': return 'O';break;
    //         case '5': return 'S';break;
    //         case '1': return 'I';break;
    //         default: return i; break;
    //     }
    // }).join('');

    // Best Practice
    return string.replaceAll('0', 'O').replaceAll('1', 'I').replaceAll('5', 'S');
}

console.log(correct("L0ND0N"));