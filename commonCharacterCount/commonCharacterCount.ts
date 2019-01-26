

function commonCharacterCount(s1: string, s2: string): number {
    const arr = [];
    const s1Arr = s1.split('');
    const s2Arr = s2.split('');

    for(let i = 0; i < s1Arr.length; i++) {
        for(let j = 0; j < s2Arr.length; j++) {
            if(s1Arr[i] === s2Arr[j]) {
                arr.push(s1Arr[i]);
                i++;
            } 
        }
    }
        return arr.length;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));


function commonCharacterCount2(s1: string, s2: string): number { 
    const s1Chars: string[] = s1.split('');
    const s2Chars: string[] = s2.split('');
    const s1CharCount = getCharList(s1Chars);
    const s2CharCount = getCharList(s2Chars);
    let total = 0;

    for(const prop in s1CharCount) {
        if(s2CharCount.hasOwnProperty(prop)) {
            console.log(prop);
            if(s2CharCount[prop] < s1CharCount[prop]) {
                total += s2CharCount[prop]
            } else {
                total += s1CharCount[prop];
            }
        }
    }

    return total;


}

function getCharList(chars: string[]) : object {
    const wordCount = {};

    for(let i = 0; i < chars.length; i++) {
        if(wordCount.hasOwnProperty(chars[i])) {
            wordCount[chars[i]]++;
        } else {
            wordCount[chars[i]] = 1;
        }
        
    }
       console.log(wordCount);
        return wordCount;

} 



console.log(commonCharacterCount2('aabcc', 'adcaa'));