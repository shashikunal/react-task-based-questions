import React from "react";
import "./clock.css";

const scale = (num, inMin, inMax, outMin, outMax) => {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

const Clock = ({ time }) => {
  const hours = time.getHours();
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className="clock">
      <div
        className="needle hour"
        style={{
          transform: `translate(-50%, -100%) rotate(${scale(
            hoursForClock,
            0,
            12,
            0,
            360
          )}deg)`,
        }}
      ></div>
      <div
        className="needle minute"
        style={{
          transform: `translate(-50%, -100%) rotate(${scale(
            minutes,
            0,
            60,
            0,
            360
          )}deg)`,
        }}
      ></div>
      <div
        className="needle second"
        style={{
          transform: `translate(-50%, -100%) rotate(${scale(
            seconds,
            0,
            60,
            0,
            360
          )}deg)`,
        }}
      ></div>
      <div className="center-point"></div>
    </div>
  );
};

export default Clock;
