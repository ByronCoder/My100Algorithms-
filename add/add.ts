//My Solution
function add(param1: number, param2: number): number {
    return param1 + param2;
}

 function add2(...numbers: number[]): number {
    var sum = 0;
    numbers.forEach(element => {
        sum += element
    });
    
    return sum;
 }
console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1,2,3,4,5));
console.log(add2(2,3));

