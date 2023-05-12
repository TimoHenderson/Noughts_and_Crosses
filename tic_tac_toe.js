const prompt = require('prompt-sync')({ sigint: true });
const { checkForVictory } = require('./check_victory.js');
const { gameBoard, addToGameBoard, getAvailableColumns, getAvailableRows, printBoard, resetGameBoard } = require('./game_board.js')



let activePlayer = true;
let win = false;

function getPlayerName() {
    return activePlayer ? "Player 1 (X)" : "Player 2 (O)";
}


while (!win) {
    printBoard()
    const availableRows = getAvailableRows()
    if (availableRows.length === 0) break;
    console.log(`${getPlayerName()}: choose your row from ${availableRows}`);
    let row = -1;
    let rowValid = false;
    while (rowValid === false) {
        row = Number(prompt());
        rowValid = availableRows.includes(Number(row));
        console.log(rowValid ? `You've chosen row ${row}` : "Invalid input, try again");
    }

    const availableColumns = getAvailableColumns(row);
    console.log(`${getPlayerName()}: choose your column from ${availableColumns}`);
    let column = -1;
    let columnValid = false;
    while (columnValid === false) {
        column = Number(prompt());

        columnValid = availableColumns.includes(column);
        console.log(columnValid ? `You've chosen column ${column}` : "Invalid input, try again");
    }
    addToGameBoard(row, column, activePlayer);
    win = checkForVictory(gameBoard);

    if (!win) activePlayer = !activePlayer;
}

printBoard();
if (win) console.log(`${getPlayerName()} wins!`);
else console.log("Draw");


// // //Test Row
// console.log("Row Win Test")
// resetGameBoard();
// addToGameBoard(1, 0, activePlayer);
// addToGameBoard(1, 1, activePlayer);
// addToGameBoard(1, 2, activePlayer);
// printBoard()
// console.log(getAvailableRows());
// console.log("win works: ", checkForVictory(gameBoard));

// // //Test Column
// console.log("Column Win Test")
// resetGameBoard();
// addToGameBoard(0, 1, activePlayer);
// addToGameBoard(1, 1, activePlayer);
// addToGameBoard(2, 1, activePlayer);
// printBoard();
// console.log(getAvailableColumns(0));
// console.log("win works: ", checkForVictory(gameBoard));

// // //Test Diagonal
// console.log("Diagonal Win Test")
// resetGameBoard();
// addToGameBoard(0, 0, activePlayer);
// addToGameBoard(1, 1, activePlayer);
// printBoard();
// addToGameBoard(2, 2, activePlayer);
// console.log("win works: ", checkForVictory(gameBoard));