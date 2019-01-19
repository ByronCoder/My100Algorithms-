function bishopAndPawn(bishop: string, pawn: string): boolean {
    const board = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8
    };

    const bishopX = board[bishop[0]];
    console.log(bishopX);
    const bishopY = parseInt(bishop[1]);
    console.log(bishopY)
    const pawnX = board[pawn[0]];
    console.log(pawnX);
    const pawnY = parseInt(pawn[1]);
    console.log(pawnY);

    if(bishopX + bishopY === pawnY + pawnX || bishopX + pawnY === pawnX + bishopY) {
        return true;
    }
    return false;
}

console.log(bishopAndPawn('a1', 'c3'));



// Javascript
function convertCell(cell){
    let result = {x:0, y:0};
    result.x = cell.charCodeAt(0) - 65;
    console.log(result.x);
    result.y = cell.charCodeAt(1) - 49;
    console.log(result.y);

    console.log(result);
    return result;
}

function calculateSlope(c1, c2){
    let dx = c1.x - c2.x;
    console.log(dx);
    if(dx == 0) return 0;
    console.log((c1.y - c2.y) / dx)
    return (c1.y - c2.y) / dx;
}

function bishopAndPawn2(bishop, pawn) {
    let b = convertCell(bishop);
    console.log(b);
    let p = convertCell(pawn);
    console.log(p);
    return Math.abs(calculateSlope(b, p)) == 1;
}

console.log(bishopAndPawn2('a1', 'c3'));