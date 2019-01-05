function adjacentElementsProduct(inputArray: number[]): number {
    var product = 0;
    var largestProduct = 0;
    for(var i=0; i< inputArray.length; i++) {
        product = inputArray[i] * inputArray[i+1];
    }
}


// Dylan Solution
function adjacentElementsProduct2(inputArray: number[]): number {
    var product = 0;
    var largestProduct = 0;
    for(var i=0; i< inputArray.length; i++) {
        product = inputArray[i] * inputArray[i+1];
    }
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

console.log(adjacentElementsProduct2([3, 6, -2, -5, 7, 3]));