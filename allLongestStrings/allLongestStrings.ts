//My Solution 

function allLongestStrings(inputArray: string[]): string[] {
   let longestWord = '';
 
   for(let i=0; i< inputArray.length; i++) {
    longestWord = inputArray[i].length > longestWord.length ? inputArray[i] : longestWord;

   }

   var newArr = inputArray.filter(i => {
         return i.length == longestWord.length;
    })
    return newArr;
}

//Dylan Solution
function allLongestStrings2(inputArray: string[]) : string[] {
    let longestLength = 0;
    const longestWords = [];

    inputArray.forEach((word: string) => {
        longestLength = longestLength < word.length ? word.length : longestLength;

    });

    inputArray.forEach((word: string) => {
        if(word.length === longestLength) {
            longestWords.push(word);
        }
    })
    return longestWords;


}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings2(["aba", "aa", "ad", "vcd", "aba"]));