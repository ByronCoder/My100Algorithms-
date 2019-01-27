// My solution

function compareIntegers(a: string, b: string): string {
    const num1 = parseInt(a);
    const num2 = parseInt(b);

    return num1 > num2 ? "greater" : num1 < num2 ? "less" : "equal"; 
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));

// Dylan's solution

function compareIntegers2(a: string, b: string): string {
    return parseInt(a)  > parseInt(b) ? 'greater' : parseInt(a) < parseInt(b) ? 'less' : 'equal';
}

console.log(compareIntegers2('12', '13'));
console.log(compareIntegers2('875', '799'));
console.log(compareIntegers2('1000', '1000'));