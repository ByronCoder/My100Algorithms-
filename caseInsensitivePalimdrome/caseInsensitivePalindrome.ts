//My solution

function isCaseInsensitivePalindrome(inputString: string): boolean {
    inputString = inputString.toLowerCase();
    let strArr = inputString.split('');
    strArr = strArr.reverse();
    let reverseStr = strArr.join('');
    
    return inputString === reverseStr;

}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));

// Dylan's solution
function isCaseInsensitivePalindrome2(inputString: string): boolean {
    const originalLowerCase = inputString.toLowerCase();
    const reversedWord = originalLowerCase.split('').reverse().join('');

    return originalLowerCase === reversedWord;


}