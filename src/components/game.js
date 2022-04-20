import React, { useState } from 'react';
import { findWinner } from '../helpers';
import Board from './board';


const Game = () => {

const [history, setHistory] = useState([Array(9).fill(null)]);
const [stepNumber, setStepNumber] = useState(0)
const [xIsNext, setXisNext] = useState(true);
const winner = findWinner(history[stepNumber])

const handleClick = i => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber]
    const squares = [...current]
    
    if (winner || squares[i]) return;
    squares[i] = xIsNext ? 'X' : 'O';
    
    setHistory([...timeInHistory, squares])
    setStepNumber(timeInHistory.length)
    setXisNext(!xIsNext);
}

const goTo = step => {
 setStepNumber(step);
 setXisNext(step % 2 === 0)
}

const renderMoves = () => (
    history.map((_step, move) => {
        const destination = move ? `Go to move${move}` : 'Start over'
        return (
            <li className='move-list' key={move}>
            <button className="list-buttons" onClick={() => goTo(move)}>{destination}</button>
            </li>
        )
    })
)
return (
    <>
<Board squares={history[stepNumber]} onClick={handleClick} />
<div className="winning">
    <p className="winner">{winner ? 'The Winner is ' + winner : 'Your turn: ' + (xIsNext ? 'X' : 'O')}</p>
    {renderMoves()}
</div>
</>
)
}

export default Game;