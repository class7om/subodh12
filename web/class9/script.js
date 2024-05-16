let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

function playerMove(index) {
    if (board[index] === '') {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        if (checkWinner(currentPlayer)) {
            alert(currentPlayer + ' wins!');
            resetGame();
            return;
        }
        if (board.every(cell => cell !== '')) {
            alert('It\'s a draw!');
            resetGame();
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner(player) {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return winConditions.some(condition =>
        condition.every(index => board[index] === player)
    );
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
    currentPlayer = 'X';
}
