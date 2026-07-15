import React, { useState, useEffect } from "react";
import "./SlidingPuzzle.css";

const imageUrl =
  "https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fHww";

function SlidingPuzzle() {
  const gridSize = 3; // 3x3 grid
  const totalTiles = gridSize * gridSize;
  const emptyTile = totalTiles - 1;

  const [tiles, setTiles] = useState([]);
  const [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    initializeTiles();
  }, []);

  const initializeTiles = () => {
    const initialTiles = Array.from({ length: totalTiles }, (_, i) => i);
    shuffleArray(initialTiles);
    setTiles(initialTiles);
    setIsSolved(false);
  };

  const shuffleArray = array => {
    let shuffled = false;
    while (!shuffled) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      // Ensure the puzzle is solvable
      if (isSolvable(array) && !isSolvedArray(array)) {
        shuffled = true;
      }
    }
  };

  const isSolvable = array => {
    let inversions = 0;
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (
          array[i] !== emptyTile &&
          array[j] !== emptyTile &&
          array[i] > array[j]
        ) {
          inversions++;
        }
      }
    }
    return inversions % 2 === 0;
  };

  const isSolvedArray = array => array.every((tile, index) => tile === index);

  const isAdjacent = index => {
    const emptyIndex = tiles.indexOf(emptyTile);
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;
    const emptyRow = Math.floor(emptyIndex / gridSize);
    const emptyCol = emptyIndex % gridSize;

    return (
      (row === emptyRow && Math.abs(col - emptyCol) === 1) ||
      (col === emptyCol && Math.abs(row - emptyRow) === 1)
    );
  };

  const moveTile = index => {
    if (!isAdjacent(index)) return;

    const newTiles = [...tiles];
    const emptyIndex = newTiles.indexOf(emptyTile);
    [newTiles[index], newTiles[emptyIndex]] = [
      newTiles[emptyIndex],
      newTiles[index],
    ];
    setTiles(newTiles);

    checkIfSolved(newTiles);
  };

  const checkIfSolved = tiles => {
    if (isSolvedArray(tiles)) {
      setIsSolved(true);
    }
  };

  return (
    <div className="puzzle-container">
      {!isSolved ? (
        <div
          className="grid"
          style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
        >
          {tiles.map((tile, index) => (
            <div
              key={index}
              className={`tile ${tile === emptyTile ? "empty" : ""}`}
              onClick={() => moveTile(index)}
              style={{
                backgroundImage:
                  tile === emptyTile ? "none" : `url(${imageUrl})`,
                backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`,
                backgroundPosition: `${
                  (tile % gridSize) * (100 / (gridSize - 1))
                }% ${Math.floor(tile / gridSize) * (100 / (gridSize - 1))}%`,
              }}
            />
          ))}
        </div>
      ) : (
        <div className="celebration">
          <h2>🎉 You Solved It! 🎉</h2>
          <button onClick={initializeTiles}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default SlidingPuzzle;
