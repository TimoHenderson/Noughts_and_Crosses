function checkForVictory(gameBoard) {
    return (
        checkDiagonal(gameBoard) ||
        checkColumns(gameBoard) ||
        checkRows(gameBoard)
    );
}

function checkColumns(gameBoard) {
    //check columns
    for (let i = 0; i < 3; i++) {
        const col = [gameBoard[0][i], gameBoard[1][i], gameBoard[2][i]];
        if (col.includes(-1)) continue;
        if (col[0] === col[1] && col[1] === col[2])
            return true;
    }
    return false;
}

function checkRows(gameBoard) {
    // // check rows
    for (let i = 0; i < 3; i++) {
        const row = gameBoard[i]
        if (row.includes(-1)) continue;
        if (row[0] === row[1] && row[1] === row[2])
            return true;
    }
    return false;
}

function checkDiagonal(gameBoard) {
    //check diagonal
    const center = gameBoard[1][1];
    if (center != -1) {
        if (gameBoard[0][0] === center && gameBoard[2][2] === center)
            return true;
        if (gameBoard[0][2] === center && gameBoard[2][0] === center)
            return true;
    }
    return false;
}



module.exports = { checkForVictory };