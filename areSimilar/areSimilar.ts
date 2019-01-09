function areSimilar(a: number[], b: number[]): boolean {
   
    const aSorted = a.sort();
    const bSorted = b.sort();

   if(aSorted.toString() == bSorted.toString()) {
       return true;
   }
   else {
       return false;
   }

 
}

function areSimilar2(a: number[], b: number[]): boolean { 
    const c: number[] = [];

    let d: number[] = [];

    if(a.toString() === b.toString()) {
        return true;
    }

    for(let i =0; i < a.length; i++) {
        if(a[i] !== b[i]) {
            c.push(a[i]);
            d.push(b[i]);
        }
    }

    d = d.reverse();

    if(c.length === 2 && (c.toString() === d.toString())) {
        return true;
    }

    return false;

}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar2([1, 2, 3, 5, 4], [2, 1, 3, 4, 5]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));

console.log(areSimilar2([1, 2, 3], [1, 2, 3]));
console.log(areSimilar2([1, 2, 3], [2, 1, 3]));
console.log(areSimilar2([1, 2, 2], [2, 1, 1]));
