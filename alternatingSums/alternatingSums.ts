// My Solution 
function alternatingSums(a: number[]): number[] {
    const team1: number[] = [];
    const team2: number[] = [];
    const sumArray: number[] = [];

    for (let i = 0; i < a.length; i+=2) {
        team1.push(a[i]);
       
    }

    for (let i = 0; i < a.length -1; i+=2) {
        team2.push(a[i+1]);
       
    }

    var team1Weight =  team1.reduce((a, b) => {
        return a + b;
    });

    var team2Weight =  team2.reduce((a, b) => {
        return a + b;
    });

    sumArray.push(team1Weight);
    sumArray.push(team2Weight);

    return sumArray;
}


function alternatingSums2(a: number[]): number[] { 
    let evenSum = 0;
    let oddSum = 0;

    a.forEach((element, index) => {
        if(index % 2 === 0) {
            evenSum += element;
        } else {
            oddSum += element;
        }

    });

    return [evenSum, oddSum];

}

console.log(alternatingSums([50, 60, 60, 45, 70]));
console.log(alternatingSums([50, 60, 60, 45, 70]));