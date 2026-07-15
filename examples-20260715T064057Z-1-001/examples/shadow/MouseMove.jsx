import React, { useRef } from "react";
import "./mouse.css";

const MouseMove = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  const handleMouseMove = e => {
    const hero = heroRef.current;
    const text = textRef.current;
    const walk = 500; // 500px

    if (!hero || !text) return;

    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e.nativeEvent;

    if (e.target !== hero) {
      x += e.target.offsetLeft;
      y += e.target.offsetTop;
    }

    const xWalk = Math.round((x / width) * walk - walk / 2);
    const yWalk = Math.round((y / height) * walk - walk / 2);

    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(145,0,245,0.7),
      ${-xWalk}px ${yWalk}px 0 rgba(0,235,135,0.7),
      ${yWalk}px ${-xWalk}px 0 rgba(0,225,0,0.7),
      ${-yWalk}px ${xWalk}px 0 rgba(0,0,115,0.7)
    `;
  };

  return (
    <div className="hero" ref={heroRef} onMouseMove={handleMouseMove}>
      <h1 ref={textRef} contentEditable>
        🔥MOVE!
      </h1>
    </div>
  );
};

export default MouseMove;
