import React, { useState, useEffect } from 'react';
import './scrollanimation.css';

const ScrollAnimation = () => {
  const [visibleBoxes, setVisibleBoxes] = useState(Array(13).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const triggerBottom = (window.innerHeight / 5) * 4;

      const updatedVisibility = visibleBoxes.map((_, index) => {
        const boxElement = document.getElementById(`box-${index + 1}`);
        const boxTop = boxElement.getBoundingClientRect().top;
        return boxTop < triggerBottom;
      });

      setVisibleBoxes(updatedVisibility);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll(); // Run on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleBoxes]);

  return (
    <div>
      <h1>Scroll to see the animation</h1>
      {Array.from({ length: 13 }, (_, index) => (
        <div
          key={index}
          id={`box-${index + 1}`}
          className={`box ${visibleBoxes[index] ? 'show' : ''}`}
        >
          <h2>Content {index + 1}</h2>
        </div>
      ))}
    </div>
  );
};

export default ScrollAnimation;
