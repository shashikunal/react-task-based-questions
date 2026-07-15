import React from "react";
import Box from "./Box";


const BoxesContainer = ({ isBig }) => {
  const rows = 4;
  const cols = 4;

  return (
    <div className={`boxes ${isBig ? "big" : ""}`}>
      {Array.from({ length: rows * cols }).map((_, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        return <Box key={index} row={row} col={col} />;
      })}
    </div>
  );
};

export default BoxesContainer;
