function adjacentElementsProduct(inputArray: number[]): number {
    var product = 0;
    var largestProduct = inputArray[0] * inputArray[1];
    for(var i=1; i< inputArray.length -1; i++) {
        product = inputArray[i] * inputArray[i+1];

        largestProduct = largestProduct < product ? product: largestProduct;
    }

    return largestProduct;
}


// Dylan Solution
function adjacentElementsProduct2(inputArray: number[]): number {
   let largestProduct = inputArray[0] * inputArray[1];

   for(let i = 1; i < inputArray.length -1; i++) {
       const product = inputArray[i] * inputArray[i + 1];
       
       largestProduct = largestProduct < product ? product : largestProduct;
   }

   return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

console.log(adjacentElementsProduct2([3, 6, -2, -5, 7, 3]));