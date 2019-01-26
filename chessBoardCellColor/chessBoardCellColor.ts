// My Solution

function chessBoardCellColor(cell1: string, cell2: string): boolean {
    const board = {
        'A': 1,
        'B': 2,
        'C': 3,
        'D': 4,
        'E': 5,
        'F': 6,
        'G': 7,
        'H': 8
    };

    const cell1X = board[cell1[0]];
    const cell1Y = parseInt(cell1[1]);
    const cell2X = board[cell2[0]];
    const cell2Y = parseInt(cell2[1]);

    let cell1Color = "";
    let cell2Color = "";

    if((cell1X % 2 === 0 && cell1Y % 2 === 0)  || (cell1X % 2 !== 0 && cell1Y % 2 !== 0)) {
            cell1Color = "dark";
    }
    else {
            cell1Color = "light";
    }

    if((cell2X % 2 === 0 && cell2Y % 2 === 0)  || (cell2X % 2 !== 0 && cell2Y % 2 !== 0)) {
            cell2Color = "dark";
    }
    else {
            cell2Color = "light";
    }


    return cell1Color === cell2Color;


}

console.log(chessBoardCellColor('A1','C3'));
console.log(chessBoardCellColor('A1','H3'));
console.log(chessBoardCellColor('A3','G3'));
console.log(chessBoardCellColor('A1','H7'));
console.log(chessBoardCellColor('A4','H5'));
console.log(chessBoardCellColor('A5','D3'));


// Dylan's Solution


function chessBoardCellColor2(cell1: string, cell2: string): boolean {
    const board = {
        'A': 1,
        'B': 2,
        'C': 3,
        'D': 4,
        'E': 5,
        'F': 6,
        'G': 7,
        'H': 8
    };
                     
    const total1 = (board[cell1[0]] + parseInt(cell1[1])) % 2;
    console.log(total1);
    const total2 = (board[cell2[0]] + parseInt(cell2[1])) % 2;
    console.log(total2);
    return total1 === total2;

}
   
   


console.log(chessBoardCellColor2('A1','C3'));
console.log(chessBoardCellColor2('A1','H3'));
console.log(chessBoardCellColor2('A3','G3'));
console.log(chessBoardCellColor2('A1','H7'));
console.log(chessBoardCellColor2('A4','H5'));
console.log(chessBoardCellColor2('A5','D3'));
