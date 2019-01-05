function addTwoDigits(n: number): number {
    // my solution

    var a = n.toString().split('');
    var sum = 0;
    
    sum = parseInt(a[0]) + parseInt(a[1]);

    return sum;
}

// Dylan Solution
function addTwoDigits2(n: any) : number {
    const nums = n.toString().split('');

    return nums.reduce((a: string, b: string) => {
        return parseInt(a) + parseInt(b);
    });

}

console.log(addTwoDigits(29));

console.log(addTwoDigits2(29));