import React, { useState, useEffect } from "react";

interface CellProps {
  hasItem: boolean;
  onClick: () => void;
  reset: boolean;
}

const Cell: React.FC<CellProps> = ({ hasItem, onClick, reset }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (reset) {
      setClicked(false);
    }
  }, [reset]);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      onClick();
    }
  };

  return (
    <div
      className={`cell ${hasItem ? "has-item" : ""} ${clicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      {clicked && hasItem ? "O" : ""}
    </div>
  );
};

export default Cell;
