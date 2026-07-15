import React, { useState, useEffect } from "react";
import "./snake.css";

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 8, y: 8 }];
const INITIAL_FOOD = { x: 12, y: 12 };
const DIRECTIONS = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

function Snake() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState(DIRECTIONS.ArrowRight);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const handleKeyDown = e => {
      if (DIRECTIONS[e.key]) {
        setDirection(DIRECTIONS[e.key]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      moveSnake();
    }, 200);
    return () => clearInterval(interval);
  }, [snake, direction, gameOver]);

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = newSnake[newSnake.length - 1];
    const newHead = {
      x: (head.x + direction.x + GRID_SIZE) % GRID_SIZE,
      y: (head.y + direction.y + GRID_SIZE) % GRID_SIZE,
    };

    if (
      newSnake.some(
        segment => segment.x === newHead.x && segment.y === newHead.y
      )
    ) {
      setGameOver(true);
      return;
    }

    newSnake.push(newHead);

    if (newHead.x === food.x && newHead.y === food.y) {
      setFood(spawnFood(newSnake));
    } else {
      newSnake.shift();
    }

    setSnake(newSnake);
  };

  const spawnFood = snake => {
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (
      snake.some(segment => segment.x === newFood.x && segment.y === newFood.y)
    );
    return newFood;
  };

  return (
    <div className="game-container">
      {gameOver ? (
        <div className="game-over">Game Over</div>
      ) : (
        <div className="grid">
          {Array.from({ length: GRID_SIZE }).map((_, row) => (
            <div key={row} className="row">
              {Array.from({ length: GRID_SIZE }).map((_, col) => {
                const isSnake = snake.some(
                  segment => segment.x === col && segment.y === row
                );
                const isFood = food.x === col && food.y === row;
                return (
                  <div
                    key={`${row}-${col}`}
                    className={`cell ${isSnake ? "snake" : ""} ${
                      isFood ? "food" : ""
                    }`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Snake;
