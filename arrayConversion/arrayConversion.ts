function arrayConversion(inputArray: number[]): number {
    let arr = [];
   
    for (let i = 0; i < inputArray.length -1; i+=2) {
        const sum = inputArray[i] + inputArray[i+1];
        

        
    }


    console.log(arr);

    return 0;
}

function arrayConversion2(inputArray: number[]): number { 
    let isOdd = true;

    while(inputArray.length !== 1) {
        inputArray = sumProduct(inputArray, isOdd);
        isOdd = !isOdd;
    }

    return inputArray[0];

}



function sumProduct(nums: number[], isOdd: boolean): number[] {
    const sumProducts: number[] = [];

    if(isOdd) {
        for(let i = 0; i < nums.length; i+=2) {
            sumProducts.push(nums[i] + nums[i +1]);
        }
    } else {
        for(let i = 0; i < nums.length; i +=2) {
            sumProducts.push(nums[i] * nums[i+1])
        }
    }

    return sumProducts;
}




console.log(arrayConversion2([1, 2, 3, 4, 5, 6, 7, 8]));