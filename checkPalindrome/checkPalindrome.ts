// My Solution (using JavaScript functions)
function checkPalindrome(inputString: string): boolean {

    const result = inputString.toLowerCase().split('').reverse().join('');
    
    return result === inputString; 
}

// My Solution (not using JavaScript functions)
function checkPalindrome2(inputString: string): boolean {
    const lowerCaseString = inputString.toLowerCase();
    let result = '';

     for(let i = lowerCaseString.length -1; i >= 0; i--) {
         result += lowerCaseString[i];
     }
    
    
    return result === lowerCaseString; 
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));

console.log(checkPalindrome2('aaBaa'));
console.log(checkPalindrome2('abac'));
console.log(checkPalindrome2('a'));

// Dylan's solution
function checkPalindrome3(inputString: string): boolean {
    const originalWord = inputString.toLowerCase();
    const reversedWord = originalWord.split('').reverse().join('');

    return originalWord === reversedWord;
}



console.log(checkPalindrome3('aaBaa'));
console.log(checkPalindrome3('abac'));
console.log(checkPalindrome3('a'));