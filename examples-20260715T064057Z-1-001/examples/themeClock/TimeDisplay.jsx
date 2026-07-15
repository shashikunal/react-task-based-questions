import React from "react";

const TimeDisplay = ({ time }) => {
  const hours = time.getHours();
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = time.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  return (
    <div className="time">
      {`${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`}
    </div>
  );
};

export default TimeDisplay;
