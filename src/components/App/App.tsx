import React, { useState } from "react";
import Board from "../Board/Board.tsx";
import './App.css';

function createItems(): boolean[] {
  const items: boolean[] = Array(36).fill(false);
  const randomIndex = Math.floor(Math.random() * 36);
  items[randomIndex] = true;
  return items;
}

function App() {
  const [items, setItems] = useState(createItems());
  const [attempts, setAttempts] = useState(0);
  const [isGameWon, setIsGameWon] = useState(false);

  const resetGame = () => {
    setItems(createItems());
    setAttempts(0);
    setIsGameWon(false);
  };

  const handleCellClick = (index: number) => {
    if (items[index]) {
      setIsGameWon(true);
    } else {
      setAttempts(attempts + 1);
    }
  };

  return (
    <div className="App">
      <h1>Find circle</h1>
      <p>Attempts: {attempts}</p>
      <Board items={items} onCellClick={handleCellClick} resetGame={resetGame} />
      {isGameWon ? <div className="game-won">You win!</div> : null}
    </div>
  );
}

export default App;
