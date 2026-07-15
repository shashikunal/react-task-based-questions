import React, { useEffect, useRef } from "react";
import "./customClock.css";
const CustomClock = () => {
  let secondHand = useRef(null);
  let minHand = useRef(null);
  let hourHand = useRef(null);

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    secondHand.current.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
    minHand.current.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
    hourHand.current.style.transform = `rotate(${hourDegrees}deg)`;
  }

  useEffect(() => {
    setInterval(setDate, 1000);

    return () => clearInterval(setDate);
  }, []);

  return (
    <div className="clockContainer">
      <div className="overlay"></div>
      <article>
        <div className="clock">
          <div className="clock-face">
            <div className="hand hour-hand" ref={hourHand}></div>
            <div className="hand min-hand" ref={minHand}></div>
            <div className="hand second-hand" ref={secondHand}></div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CustomClock;
