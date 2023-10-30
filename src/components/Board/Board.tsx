import React, { useState } from "react";
import Cell from "../Cell/Cell.tsx";

interface BoardProps {
  items: boolean[];
  onCellClick: (index: number) => void;
  resetGame: () => void;
}

const Board: React.FC<BoardProps> = ({ items, onCellClick, resetGame }) => {
  const [reset, setReset] = useState(false);

  const handleResetClick = () => {
    setReset(true);
    setTimeout(() => {
      setReset(false);
    }, 100);
    resetGame();
  };

  return (
    <div>
      <div className="board">
        {items.map((hasItem, index) => (
          <Cell key={index} hasItem={hasItem} onClick={() => onCellClick(index)} reset={reset} />
        ))}

      </div>
      <button className="reset-button" onClick={handleResetClick}>
        Сброс
      </button>
    </div>
  );
};

export default Board;
