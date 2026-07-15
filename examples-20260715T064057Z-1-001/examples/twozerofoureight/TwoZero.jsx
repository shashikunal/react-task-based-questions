import React, { useState, useEffect } from "react";
import "./twozero.css";

const GRID_SIZE = 4;

const generateEmptyGrid = () => {
  return Array(GRID_SIZE)
    .fill(null)
    .map(() => Array(GRID_SIZE).fill(0));
};

const getRandomEmptyCell = grid => {
  const emptyCells = [];
  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      if (grid[row][col] === 0) emptyCells.push({ row, col });
    }
  }
  if (emptyCells.length === 0) return null;
  return emptyCells[Math.floor(Math.random() * emptyCells.length)];
};

const addRandomTile = grid => {
  const newGrid = grid.map(row => [...row]);
  const cell = getRandomEmptyCell(newGrid);
  if (cell) {
    newGrid[cell.row][cell.col] = Math.random() < 0.9 ? 2 : 4;
  }
  return newGrid;
};

const slide = row => {
  const nonZero = row.filter(num => num !== 0);
  const zeros = Array(GRID_SIZE - nonZero.length).fill(0);
  return [...nonZero, ...zeros];
};

const combine = row => {
  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] !== 0 && row[i] === row[i + 1]) {
      row[i] *= 2;
      row[i + 1] = 0;
    }
  }
  return row;
};

const moveLeft = grid => {
  return grid.map(row => {
    const slidRow = slide(row);
    const combinedRow = combine(slidRow);
    return slide(combinedRow);
  });
};

const rotateGrid = grid => {
  const newGrid = generateEmptyGrid();
  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      newGrid[col][GRID_SIZE - 1 - row] = grid[row][col];
    }
  }
  return newGrid;
};

const moveGrid = (grid, direction) => {
  let newGrid = [...grid];
  if (direction === "up") {
    newGrid = rotateGrid(newGrid);
    newGrid = rotateGrid(newGrid);
    newGrid = rotateGrid(newGrid);
    newGrid = moveLeft(newGrid);
    newGrid = rotateGrid(newGrid);
  } else if (direction === "down") {
    newGrid = rotateGrid(newGrid);
    newGrid = moveLeft(newGrid);
    newGrid = rotateGrid(newGrid);
    newGrid = rotateGrid(newGrid);
    newGrid = rotateGrid(newGrid);
  } else if (direction === "right") {
    newGrid = rotateGrid(newGrid);
    newGrid = rotateGrid(newGrid);
    newGrid = moveLeft(newGrid);
    newGrid = rotateGrid(newGrid);
    newGrid = rotateGrid(newGrid);
  } else if (direction === "left") {
    newGrid = moveLeft(newGrid);
  }
  return newGrid;
};

const TwoZero = () => {
  const [grid, setGrid] = useState(
    addRandomTile(addRandomTile(generateEmptyGrid()))
  );
  const [gameOver, setGameOver] = useState(false);

  const handleKeyDown = e => {
    if (gameOver) return;
    const direction = e.key.replace("Arrow", "").toLowerCase();
    if (["up", "down", "left", "right"].includes(direction)) {
      const newGrid = moveGrid(grid, direction);
      if (JSON.stringify(newGrid) !== JSON.stringify(grid)) {
        setGrid(addRandomTile(newGrid));
      }
    }
  };

  useEffect(() => {
    const checkGameOver = () => {
      const directions = ["up", "down", "left", "right"];
      const canMove = directions.some(dir => {
        const newGrid = moveGrid(grid, dir);
        return JSON.stringify(newGrid) !== JSON.stringify(grid);
      });
      if (!canMove) setGameOver(true);
    };
    checkGameOver();
  }, [grid]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [grid, gameOver]);

  return (
    <div className="game-container">
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
              <div key={cellIndex} className={`cell cell-${cell}`}>
                {cell !== 0 ? cell : ""}
              </div>
            ))}
          </div>
        ))}
      </div>
      {gameOver && <div className="game-over">Game Over</div>}
    </div>
  );
};

export default TwoZero;
