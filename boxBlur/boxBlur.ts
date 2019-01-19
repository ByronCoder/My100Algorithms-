function boxBlur(image: number[][]): number[][] {
    let sum = 0;
    let result = [];
    for(let i = 0; i < image.length; i++) {
        for(let j = 0; j < image.length; j++) {
            sum += image[i][j];
        }
    }

    result.push(Math.floor(sum / (image.length * image.length)));
    image = [result];

    return image;

}

console.log(boxBlur([[1, 1, 1], 
    [1, 7, 1], 
    [1, 1, 1]]));

console.log(boxBlur([[1,1,1,1],[1,7,2,1],[1,1,1,1],[4,4,4,4]]));
console.log(boxBlur([[1,1,1,1,1],[2,2,2,2,2],[3,3,3,3,3],[4,4,4,4,4],[5,5,5,5,5]]));



function boxBlur2(image: number[][]): number[][] { 
    const res = [];

    for(let y = 0; y < image.length - 2; y++) {
        const line = [];

        for(let x = 0; x < image[y].length - 2; x++) {
            let sum = 0;
            let count = 0;

            for(let a = y; a < y + 3; a++) {
                for(let b = x; b < x + 3; b++) {
                    sum += image[a][b];
                    count++;
                }
            }
            line.push(Math.floor(sum/count));

        }
        res.push(line);

    }

    return res;

}


console.log(boxBlur2([[1, 1, 1], 
    [1, 7, 1], 
    [1, 1, 1]]));

console.log(boxBlur2([[1,1,1,1],[1,7,2,1],[1,1,1,1],[4,4,4,4]]));
console.log(boxBlur2([[1,1,1,1,1],[2,2,2,2,2],[3,3,3,3,3],[4,4,4,4,4],[5,5,5,5,5]]));