//My Solution

function almostIncreasingSequence(sequence: number[]): boolean {
    let count = 0;
    let increasingSequence = false;

    for (let i = 0; i < sequence.length; i++) {
       
        sequence[i] >= sequence[i+1] ? count++ : count;
        if(count > 1) {
            return false;
        }
        
    }

     return count <= 1;
}

// Dylan Solution
function almostIncreasingSequence2(sequence: number[]): boolean {
    let count = 0;

    for(let i = 0; i < sequence.length; i++) {
        if(sequence[i] <= sequence[i - 1]) {
            count++;
            if(sequence[i] <= sequence[i -2] && sequence[i +1] <= sequence[i-1]) {
                return false;
            }
        }
    }

    return count <= 1;
}

 console.log(almostIncreasingSequence([1, 1, 5, 1, 6, 10])) 
 console.log(almostIncreasingSequence([1, 3, 2, 3])) 
 console.log(almostIncreasingSequence([1, 3, 2, 1]));
 console.log(almostIncreasingSequence([1, 3, 2]));
 console.log(almostIncreasingSequence([1, 3, 2, 4, 5, 7]));
 console.log(almostIncreasingSequence([1, 1, 2, 4, 1]));