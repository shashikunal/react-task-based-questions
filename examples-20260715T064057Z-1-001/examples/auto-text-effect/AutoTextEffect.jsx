import React, { useState, useEffect } from 'react';
import './AutoTextEffect.css';

const AutoTextEffect = () => {
  const [text, setText] = useState('I Love Reactjs !!!!');
  const [idx, setIdx] = useState(1);
  const [speed, setSpeed] = useState(300);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIdx((prev) => (prev >= text.length ? 1 : prev + 1));
    }, speed);

    return () => clearTimeout(interval); // Cleanup timeout on re-render
  }, [idx, speed, text]);

  const handleSpeedChange = (e) => {
    const newSpeed = 300 / e.target.value;
    setSpeed(newSpeed);
  };

  return (
    <div className="container">
      <h1 id="text">{text.slice(0, idx)}</h1>
      <div className="controls">
        <label htmlFor="speed">Speed:</label>
        <input
          type="number"
          name="speed"
          id="speed"
          min="1"
          max="10"
          step="1"
          defaultValue="1"
          onInput={handleSpeedChange}
        />
      </div>
    </div>
  );
};

export default AutoTextEffect;
