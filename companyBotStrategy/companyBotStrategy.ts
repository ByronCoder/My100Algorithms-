// My Solution

function companyBotStrategy(trainingData: number[][]): number {
    let total: number = 0;
    let count: number = 0;

    for(let i = 0; i < trainingData.length; i++) {
            if(trainingData[i][1] === 1) {
                total += trainingData[i][0];
                count++;
            }
        
    }
    if(total === 0) {
        return 0.0;
    }

    return total / count;
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));


// Dylan's solution
function companyBotStrategy2(trainingData: number[][]): number { 
    let time = 0;
    let correctness = 0;

    trainingData.forEach((data: number[]) => {
        if(data[1] === 1) {
            time += data[0];
            correctness += data[1];
        }
    });

    return time / correctness || 0; 
}


console.log(companyBotStrategy2([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy2([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy2( [[4, -1], [0, 0], [5, -1]]));