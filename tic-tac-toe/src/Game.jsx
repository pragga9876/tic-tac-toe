import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className={`square ${value ? 'filled' : ''}`} onClick={onSquareClick}>
      <span className="square-content">{value}</span>
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  const isBoardFull = squares.every(square => square !== null);
  const isDraw = !winner && isBoardFull;
  
  function handleClick(index) {
    if (squares[index] || winner) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const currentPlayer = xIsNext ? 'X' : 'O';

  return (
    <div>
      {winner && (
        <div className="winner-announcement">
          <h2 className="winner-text">🎉 Player {winner} Wins! 🎉</h2>
        </div>
      )}
      
      {isDraw && (
        <div className="draw-announcement">
          <h2 className="draw-text">It's a Draw! 🤝</h2>
        </div>
      )}
      
      {!winner && !isDraw && (
        <div className="status-container">
          <div className={`player-indicator ${currentPlayer.toLowerCase()}`}>
            <span className="player-label">Current Player</span>
            <span className="player-symbol">{currentPlayer}</span>
          </div>
        </div>
      )}

      <div className="board-container">
        <div className="board">
          {squares.map((value, index) => (
            <Square key={index} value={value} onSquareClick={() => handleClick(index)} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Game() {
  const [scores, setScores] = useState({
    x: 0,
    o: 0,
    draws: 0
  });
  
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const winner = calculateWinner(currentSquares);
  const isBoardFull = currentSquares.every(square => square !== null);
  const isDraw = !winner && isBoardFull;

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);

    const newWinner = calculateWinner(nextSquares);
    const newBoardFull = nextSquares.every(square => square !== null);
    const newIsDraw = !newWinner && newBoardFull;

    if (newWinner) {
      setScores(prev => ({
        ...prev,
        [newWinner.toLowerCase()]: prev[newWinner.toLowerCase()] + 1
      }));
    } else if (newIsDraw) {
      setScores(prev => ({
        ...prev,
        draws: prev.draws + 1
      }));
    }
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  function resetScores() {
    setScores({ x: 0, o: 0, draws: 0 });
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button 
          onClick={() => setCurrentMove(move)}
          className={currentMove === move ? 'active-move' : ''}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div>
      <div className="scoreboard">
        <div className="score-item x-score">
          <span className="score-label">X Wins</span>
          <span className="score-value">{scores.x}</span>
        </div>
        <div className="score-item draw-score">
          <span className="score-label">Draws</span>
          <span className="score-value">{scores.draws}</span>
        </div>
        <div className="score-item o-score">
          <span className="score-label">O Wins</span>
          <span className="score-value">{scores.o}</span>
        </div>
      </div>

      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />

      <div className="controls">
        <button className="btn-reset" onClick={resetGame}>
          🔄 New Game
        </button>
        <button className="btn-reset-scores" onClick={resetScores}>
          🗑️ Reset Scores
        </button>
      </div>

      <div style={{ marginTop: '30px', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <h3 style={{ marginBottom: '15px', fontSize: '1.1rem' }}>Move History</h3>
        <ol style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', listStyle: 'none', padding: 0 }}>
          {moves}
        </ol>
      </div>
    </div>
  );
}

export default Game;
