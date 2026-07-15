import React, { useState, useEffect } from 'react';
import './BlurryLoading.css';

const BlurryLoading = () => {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setLoad((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  return (
    <div className="app">
      <div
        className="bg"
        style={{
          filter: `blur(${scale(load, 0, 100, 30, 0)}px)`,
        }}
      ></div>
      <div
        className="loadingText"
        style={{
          opacity: scale(load, 0, 100, 1, 0),
        }}
      >
        {load}%
      </div>
    </div>
  );
};

export default BlurryLoading;
