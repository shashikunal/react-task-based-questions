import React, { useState, useEffect } from "react";

function DateTime() {
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
  const [currentTime, setCurrentTime] = useState(new Date());
  let day = currentTime.getDay();
  let month = currentTime.getMonth();
  let date = currentTime.getDate();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Updates every second

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);
  console.log(minutes);
  return (
    <>
      <div className="time">
        {hours % 12}:{minutes.toString().length === 1 ? `0${minutes}` : minutes}
        {hours > 12 ? "PM" : "AM"}
      </div>
      <div className="date">
        {days[day]},{months[month]}
        <span className="circle">{date}</span>
        <p></p>
      </div>
    </>
  );
}

export default DateTime;
