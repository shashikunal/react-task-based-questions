import React from "react";

const DateDisplay = ({ time }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = time.getDay();
  const month = time.getMonth();
  const date = time.getDate();

  return (
    <div className="date">
      {`${days[day]}, ${months[month]} `}
      <span className="circle">{date}</span>
    </div>
  );
};

export default DateDisplay;
