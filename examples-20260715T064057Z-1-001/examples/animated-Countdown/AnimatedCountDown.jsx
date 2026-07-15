import React, { useState, useRef, useEffect } from 'react';
import './animatedCountDown.css';

const AnimatedCountDown = () => {
  const [currentNum, setCurrentNum] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const counterRef = useRef();
  const finalRef = useRef();

  const nums = [3, 2, 1, 0];

  useEffect(() => {
    if (isRunning) {
      const timer = setTimeout(() => {
        if (currentNum < nums.length - 1) {
          setCurrentNum((prev) => prev + 1);
        } else {
          setIsRunning(false);
          if (counterRef.current) counterRef.current.classList.add('hide');
          if (finalRef.current) finalRef.current.classList.add('show');
        }
      }, 1500);

      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [currentNum, isRunning, nums.length]);

  const resetAnimation = () => {
    setIsRunning(true);
    setCurrentNum(0);
    if (counterRef.current) counterRef.current.classList.remove('hide');
    if (finalRef.current) finalRef.current.classList.remove('show');
  };

  return (
    <div className="app">
      {/* Countdown */}
      <div className="counter" ref={counterRef}>
        <div className="nums">
          {nums.map((num, idx) => (
            <span
              key={idx}
              className={
                idx === currentNum
                  ? 'in'
                  : idx < currentNum
                  ? 'out'
                  : ''
              }
            >
              {num}
            </span>
          ))}
        </div>
        <h4 className="message">Get Ready</h4>
      </div>

      {/* Final Screen */}
      <div className="final" ref={finalRef}>
        <h1 className='letsgo'>Let's GO</h1>
        <button className="replay" onClick={resetAnimation}>
          <span>Replay</span>
        </button>
      </div>
    </div>
  );
};

export default AnimatedCountDown;
