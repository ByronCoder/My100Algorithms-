function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let sum = 0;
  let max = 0;

  for(let i = 0; i < k; i++) {
      sum += inputArray[i];
  }

  max = sum;

  for(let i = k; i < inputArray.length; i++) {
      sum -= inputArray[i-k];
      sum += inputArray[i];
   
      if(sum > max) {
          max = sum;
      }
  }

  return max;

   
}


function arrayMaxConsecutiveSum2(arr: number[], sizeOfElements: number): number {
    
    if (sizeOfElements > arr.length) return null;
    
    let maxSum: number = 0;
 
    for (let i = 0; i < sizeOfElements; i++){
        maxSum += arr[i];
    }
 
    let tempSum = maxSum;
    console.log(tempSum);
 
    for (let i = 1; i < arr.length - 1; i++){
        tempSum = tempSum - arr[i - 1] + arr[i + 1];
        console.log(tempSum);
        maxSum = Math.max(maxSum, tempSum);
    }
 
    return maxSum;
}
 
console.log(arrayMaxConsecutiveSum2([2,3,5,1,6], 2));
 
 

function sumOfConsecutives(arr: number[], num: number, index: number): number {
    if (index + 1 >= num) {
        return arr[index];
    }
    return arr[index] + sumOfConsecutives(arr, num, index + 1);
}
 
function arrayMaxConsecutiveSum3(inputArray: number[], k: number): number {
    return inputArray.reduce((maxSum: number, num: number, index: number) => {
        const consecutiveSum = sumOfConsecutives(inputArray, k + index, index);
        if (maxSum < consecutiveSum) {
            return consecutiveSum;
        }
        return maxSum;
    }, 0);
}
 
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2)); // 8
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 4)); // 15
console.log(arrayMaxConsecutiveSum([2, 3, 15, 1, 6, 7, 9, 12], 3)); // 28




 
 

 


console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));