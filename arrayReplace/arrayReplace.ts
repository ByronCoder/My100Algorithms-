function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
   
//My Solution
    for (let i = 0; i < inputArray.length; i++) {
        if(inputArray[i] === elemToReplace) {
            inputArray[i] = substitutionElem;
        }
           
    }

    return inputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));
console.log(arrayReplace([1, 2, 1], 2, 3));
console.log(arrayReplace([1, 2, 1], 2, 1));


//Dylan's solution
function arrayReplace2(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
   
    inputArray.forEach((element, index) => {
        if(element == elemToReplace) {
           inputArray[index] = substitutionElem;
        }

    });

    return inputArray;
}

console.log(arrayReplace2([1, 2, 1], 1, 3));
console.log(arrayReplace2([1, 2, 1], 2, 3));
console.log(arrayReplace2([1, 2, 1], 2, 1));