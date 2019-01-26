
// My solution
function characterParity(symbol: string): string {
    let num = parseInt(symbol);

    if(isNaN(num)) {
        return 'not a digit';
    }

    if(num % 2 === 0) {
        return 'even';
    }
    else { 
        return 'odd';
    }
    
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))

// Dylan's solution

function characterParity2(symbol: string): string {
    const result = parseInt(symbol);

    return isNaN(result) ? 'not a digit' : result % 2 === 0  ? 'even' : 'odd';

}

console.log(characterParity2('5'))
console.log(characterParity2('8'))
console.log(characterParity2('q'))