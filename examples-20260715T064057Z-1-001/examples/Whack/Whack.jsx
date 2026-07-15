import React, { useState, useEffect } from "react";
import "./style.css";

const Whack = () => {
  const [score, setScore] = useState(0);
  const [timeUp, setTimeUp] = useState(false);
  const [lastHole, setLastHole] = useState(null);
  const [start, setStart] = useState(false);
  const holes = Array.from({ length: 6 }, (_, i) => i + 1);

  const randomTime = (min, max) =>
    Math.round(Math.random() * (max - min) + min);

  const randomHole = () => {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      return randomHole();
    }
    setLastHole(hole);
    return hole;
  };

  const peep = () => {
    const time = randomTime(200, 1000);
    const hole = randomHole();
    setTimeout(() => {
      document.querySelector(`.hole${hole}`).classList.add("up");
      setTimeout(() => {
        document.querySelector(`.hole${hole}`).classList.remove("up");
        if (!timeUp) peep();
      }, time);
    }, time);
  };

  const startGame = () => {
    setStart(true);
    setScore(0);
    setTimeUp(false);
    peep();
    setTimeout(() => setTimeUp(true), 10000);
  };

  const bonk = e => {
    if (!e.isTrusted) return; // cheater!
    setScore(score + 1);
    e.target.parentNode.classList.remove("up");
  };

  useEffect(() => {
    const moleElements = document.querySelectorAll(".mole");
    moleElements.forEach(mole => mole.addEventListener("click", bonk));

    return () => {
      moleElements.forEach(mole => mole.removeEventListener("click", bonk));
    };
  }, [score]);

  return (
    <div>
      <h1>
        Whack-a-mole! <span className="score">{score}</span>
      </h1>
      <section className="button">
        {start ? null : <button onClick={startGame}>Start!</button>}
      </section>
      <div className="game">
        {holes.map(hole => (
          <div key={hole} className={`hole hole${hole}`}>
            <div className="mole"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whack;
