import React from "react";

interface ResetButtonProps {
  onReset: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => {
  return (
    <button className="reset-button" onClick={onReset}>
      Сброс
    </button>
  );
};

export default ResetButton;
