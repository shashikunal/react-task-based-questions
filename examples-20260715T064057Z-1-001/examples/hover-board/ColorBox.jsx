import React, { useRef } from "react";

function ColorBox() {
  const boxRef = useRef(null); // Create a ref for each box

  const getRandomColor = () => {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
  };

  const handleMouseEnter = () => {
    const randomColor = getRandomColor();
    boxRef.current.style.backgroundColor = randomColor;
    boxRef.current.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
  };

  const handleMouseLeave = () => {
    boxRef.current.style.backgroundColor = "#1d1d1d";
    boxRef.current.style.boxShadow = "0 0 2px #000";
  };

  return (
    <div
      ref={boxRef}
      className="color-box"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    ></div>
  );
}
export default ColorBox;
