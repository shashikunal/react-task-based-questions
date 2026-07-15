//! Create a react application, where there is a button on UI and wheneever you will click on that button you will get an animation of click. But till one animation is going on clicking on button should not give rise to another animation.
import React, { useState, useEffect } from "react";
import "./style.css";

const RippleButton = () => {
  const [ripple, setRipple] = useState(null); // Single ripple state
  const [isAnimating, setIsAnimating] = useState(false); // Animation lock

  const handleClick = e => {
    if (isAnimating) return; // Prevent multiple clicks during animation

    const rect = e.currentTarget.getBoundingClientRect();

    // Calculate the ripple position relative to the button
    const xInside = e.clientX - rect.left;
    const yInside = e.clientY - rect.top;

    // Set the ripple state and lock animation
    setRipple({ x: xInside, y: yInside });
    setIsAnimating(true);
  };

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setRipple(null); // Clear the ripple after animation
        setIsAnimating(false); // Unlock animation
      }, 500); // Match animation duration

      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  return (
    <button className="ripple" onClick={handleClick}>
      Click me
      {ripple && (
        <span className="circle" style={{ top: ripple.y, left: ripple.x }} />
      )}
    </button>
  );
};

export default RippleButton;
