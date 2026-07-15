import React, { useState, useEffect } from "react";
import "./style.css";

const GamePlay = ({ selectedInsect }) => {
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(0);
  const [insects, setInsects] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  // Start timer
  useEffect(() => {
    const interval = setInterval(() => setTime(prev => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  // Spawn the first insect
  useEffect(() => {
    spawnInsect();
  }, []);

  // Function to spawn a new insect
  const spawnInsect = () => {
    const x = Math.random() * (window.innerWidth - 200) + 100;
    const y = Math.random() * (window.innerHeight - 200) + 100;
    setInsects(prev => [
      ...prev,
      { id: Date.now(), x, y, rotate: Math.random() * 360 },
    ]);
  };

  // Handle catching an insect
  const catchInsect = id => {
    setScore(prev => prev + 1);
    setInsects(prev => prev.filter(insect => insect.id !== id));

    // Spawn new insects after catching
    setTimeout(spawnInsect, 1000);
    setTimeout(spawnInsect, 1500);

    // Show the message if score exceeds 19
    if (score + 1 > 19) {
      setShowMessage(true);
    }
  };

  return (
    <div className="gameContainer">
      <h3 className="time">
        Time:{" "}
        {Math.floor(time / 60)
          .toString()
          .padStart(2, "0")}
        :{(time % 60).toString().padStart(2, "0")}
      </h3>
      <h3 className="score">Score: {score}</h3>
      <h5 className={`message ${showMessage ? "messageVisible" : ""}`}>
        Are you annoyed yet? <br /> You are playing an impossible game!!
      </h5>
      {insects.map(insect => (
        <div
          key={insect.id}
          className="insect"
          style={{ top: insect.y, left: insect.x }}
          onClick={() => catchInsect(insect.id)}
        >
          <img
            src={selectedInsect.src}
            alt={selectedInsect.name}
            style={{ transform: `rotate(${insect.rotate}deg)` }}
          />
        </div>
      ))}
    </div>
  );
};

export default GamePlay;
