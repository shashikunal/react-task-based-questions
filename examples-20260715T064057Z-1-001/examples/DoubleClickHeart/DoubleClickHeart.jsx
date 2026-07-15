import React, { useState } from "react";
import "./DoubleClickHeart.css";

const DoubleClickHeart = () => {
  const [clickTime, setClickTime] = useState(0);
  const [timesClicked, setTimesClicked] = useState(0);

  const createHeart = e => {
    const heart = document.createElement("span");
    heart.classList.add("heart"); // Adding "heart" class here

    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    e.target.appendChild(heart);

    setTimesClicked(prev => prev + 1);

    setTimeout(() => heart.remove(), 1000); // Removes the heart after animation
  };
  const handleClick = e => {
    const currentTime = new Date().getTime();

    if (clickTime === 0) {
      setClickTime(currentTime);
    } else {
      if (currentTime - clickTime < 800) {
        createHeart(e);
        setClickTime(0);
      } else {
        setClickTime(currentTime);
      }
    }
  };

  return (
    <div className="container">
      <h3>
        Double click on the image to <span className="fire">🔥</span> it
      </h3>
      <small>
        You liked it <span>{timesClicked}</span> times
      </small>
      <div className="loveMe" onClick={handleClick}></div>
    </div>
  );
};

export default DoubleClickHeart;
