import React, { useRef } from "react";
import "./style.css";

const Xbox = ({ onHover }) => {
  const rightRef = useRef();

  const handleMouseEnter = () => {
    onHover("hover-right");
  };

  const handleMouseLeave = () => {
    onHover("");
  };

  return (
    <div
      className="split right"
      ref={rightRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1>XBox Series X</h1>
      <a href="#" className="btn">
        Buy Now
      </a>
    </div>
  );
};

export default Xbox;
