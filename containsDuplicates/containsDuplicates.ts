// My solution

function containsDuplicates(a: number[]): boolean {
    a = a.sort((a,b) => {
        return a - b;
    });

    console.log(a);

    for(let i = 0; i < a.length; i++) {
        if(a[i] === a[i+1]) {
            return true;
        }
        else {
            return false
        }
    }
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));

// Dylan solution 
function containsDuplicates2(a: number[]): boolean { 
    a = a.sort((a, b) => a - b);

    for(let i = 0; i < a.length; i++) {
        if(a[i] === a[i +1]) {
            return true;
        }
    }
    return false;
}
