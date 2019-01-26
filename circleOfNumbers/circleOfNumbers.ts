function circleOfNumbers(n: number, firstNumber: number): number {
    const numArry = [];
    const halfWay = n / 2;

    for(let i = 0; i < n; i++) {
        numArry.push(i);
    }

    if(firstNumber < halfWay) {
        return numArry[firstNumber + halfWay];
    }

    return numArry[firstNumber - halfWay];
}

console.log(circleOfNumbers(10, 2));