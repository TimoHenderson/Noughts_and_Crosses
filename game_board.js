const gameBoard =
    [[-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]];

//false is player 2, true is player 1
//let activePlayer = true;

function resetGameBoard() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameBoard[i][j] = -1;
        }
    }
}

function addToGameBoard(row, col, activePlayer) {
    const value = activePlayer ? "X" : "O";
    if (gameBoard[row][col] === -1) {
        gameBoard[row][col] = value;
        return true;
    }
    return false;
}

function getAvailableRows() {
    return gameBoard.reduce((available, current, index) => {
        if (current.includes(-1)) available.push(index);
        return available;
    }, []);

}
function getAvailableColumns(rowIndex) {
    const column = gameBoard[rowIndex];
    return column.reduce((availableColumns, current, index) => {
        if (current === -1) availableColumns.push(index);
        return availableColumns;
    }, []);
}
function printBoard() {
    console.table(gameBoard);
}

module.exports = { gameBoard, addToGameBoard, getAvailableColumns, getAvailableRows, printBoard, resetGameBoard };