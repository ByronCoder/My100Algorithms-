
// My solution (not all tests pass)
function chunkyMonkey(arr: any[], size: number): any[][] {
     const arr1 = arr.slice(0, size);
     console.log(arr1);
     const arr2 = arr.slice(size);
     console.log(arr2);
     const result = [arr1,arr2];

     return result;
      

    
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));


// Dylan's Solution
function chunkyMonkey2(arr: any[], size: number): any[][] {
    const nested = [];
    let count = 0;

    while(count < arr.length) {
        nested.push(arr.slice(count, count += size))
    }
    return nested;
}

console.log(chunkyMonkey2(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey2([0, 1, 2, 3, 4, 5], 4));
console.log(chunkyMonkey(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 2));