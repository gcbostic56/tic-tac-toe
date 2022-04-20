export function findWinner(squares) {
    const tacWinningScenarios = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < tacWinningScenarios.length; i++) {
        const[x, y, z] = tacWinningScenarios[i];
        if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
            console.log(squares[x])
            return squares[x];
            
        }        
    }
    return null;
}



