function arrayChange(inputArray: number[]): number {
  let moves = 1;
  let arr = [...inputArray];
    

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + 1;
        console.log(arr)
        arr[i] >= arr[i+1] ? moves++ : moves;
        
        
            arr = [...inputArray];
        }
       
        return moves;

    }

    
function arrayChange2(inputArray: number[]): number {
    let count = 0;

    for(let i = 0; i < inputArray.length; i++) {
        if(inputArray[i] >= inputArray[i + 1]) {
            const difference = (inputArray[i] +1) - inputArray[i + 1];
          
            inputArray[i + 1] = inputArray[i] + 1;
            console.log(difference);
            count += difference;
            console.log(count);
        }
    }

    return count;

}

function arrayChange3(arr: number[]): number {
 
    let turnsNeeded: number = 0;
 
    for (let i = 1; i < arr.length; i++){
        if (arr[i] <= arr[i - 1]){
            turnsNeeded += (arr[i -1] + 1) - arr[i];
            arr[i] = arr[i - 1] + 1;
        }
    }
    return turnsNeeded;
}
 
console.log(arrayChange3([1,1,1]));
console.log(arrayChange3([1,2,2]));
 


console.log(arrayChange([1, 1, 1]));
console.log(arrayChange2([1, 1, 1]));


console.log(arrayChange([1, 1, 1])); // { array: [1, 2, 3], counter: 3}
console.log(arrayChange([-1, 1, 1])); // { array: [-1, 0, 1], counter: 1}
console.log(arrayChange([2, 1, 5]));