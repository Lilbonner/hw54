import React, { useState } from "react";
import Board from "./board.tsx";
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
      <h1>Найди кольцо</h1>
      <p>Попыток: {attempts}</p>
      <Board items={items} onCellClick={handleCellClick} resetGame={resetGame} />
      {isGameWon ? <div className="game-won">Вы победили!</div> : null}
    </div>
  );
}

export default App;
