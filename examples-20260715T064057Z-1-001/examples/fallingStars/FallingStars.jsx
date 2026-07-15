import React, { useState, useEffect } from "react";
import "./falling.css";

const FallingStar = () => {
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [endMessage, setEndMessage] = useState(false);
  const [stars, setStars] = useState([]);

  const randomPosition = () => `${Math.random() * (window.innerWidth - 40)}px`;

  const dropStar = () => {
    const newStar = {
      id: Date.now(),
      left: randomPosition(),
      top: 0,
    };
    setStars(prevStars => [...prevStars, newStar]);
  };

  const moveStars = () => {
    setStars(prevStars =>
      prevStars
        .map(star => ({
          ...star,
          top: star.top + 5,
        }))
        .filter(star => {
          const starElement = document.getElementById(star.id);
          const bucket = document.querySelector(".bucket");

          if (starElement && bucket) {
            const starRect = starElement.getBoundingClientRect();
            const bucketRect = bucket.getBoundingClientRect();

            if (
              starRect.bottom >= bucketRect.top &&
              starRect.left < bucketRect.right &&
              starRect.right > bucketRect.left
            ) {
              setScore(prevScore => prevScore + 1);
              return false; // Remove caught star
            }

            if (star.top > window.innerHeight) {
              return false; // Remove off-screen star
            }
          }

          return true;
        })
    );
  };

  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setStars([]);
    setEndMessage("");

    const gameDuration = 15000; // 15 seconds
    const dropInterval = 2000; // Drop stars every 1 second

    const starDropper = setInterval(dropStar, dropInterval);
    const starMover = setInterval(moveStars, 100);

    setTimeout(() => {
      clearInterval(starDropper);
      clearInterval(starMover);
      setGameActive(false);
      setEndMessage(true);
    }, gameDuration);
  };

  useEffect(() => {
    const handleMouseMove = e => {
      const bucket = document.querySelector(".bucket");
      if (bucket) {
        const bucketWidth = bucket.offsetWidth || 100;
        let newLeft = e.pageX - bucketWidth / 2;

        newLeft = Math.max(
          0,
          Math.min(newLeft, window.innerWidth - bucketWidth)
        );

        bucket.style.left = `${newLeft}px`;
      }
    };

    if (gameActive) {
      document.addEventListener("mousemove", handleMouseMove);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
    }

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [gameActive]);

  return (
    <div>
      <h1>
        Catch the Falling Stars! <span className="score">{score}</span>
      </h1>
      {!gameActive && <button onClick={startGame}>Start!</button>}
      <section className="endMsg">
        {endMessage ? `Game Over! Score - ${score}` : null}
      </section>
      <div className="game">
        {stars.map(star => (
          <div
            key={star.id}
            id={star.id}
            className="star"
            style={{ left: star.left, top: star.top + "px" }}
          />
        ))}
        <div className="bucket"></div>
      </div>
    </div>
  );
};

export default FallingStar;
