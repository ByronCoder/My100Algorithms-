// My Solution
function candies(n: number, m: number): number {
    
    return n * Math.floor(m / n);
}

console.log(candies(3, 10));


function candies2(n: number, m: number): number {
    const candy = Math.floor(m / n);

    return candy * n;
}



console.log(candies(3, 10));