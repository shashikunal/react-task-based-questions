import React, { useRef } from "react";
import "./style.css";

const PlayStation = ({ onHover }) => {
  const leftRef = useRef();

  const handleMouseEnter = () => {
    onHover("hover-left");
  };

  const handleMouseLeave = () => {
    onHover("");
  };

  return (
    <div
      className="split left"
      ref={leftRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1>PlayStation 5</h1>
      <a href="#" className="btn">
        Buy Now
      </a>
    </div>
  );
};

export default PlayStation;
