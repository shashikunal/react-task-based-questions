import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import Clock from "./Clock";
import TimeDisplay from "./TimeDisplay";
import DateDisplay from "./DateDisplay";
import "./clock.css";

const ThemeClock = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <section className={isDarkMode ? "dark" : ""} id="parent">
      <div>
        <ThemeToggle isDarkMode={isDarkMode} toggleMode={toggleMode} />
        <div className="clock-container">
          <Clock time={time} />
          <TimeDisplay time={time} />
          <DateDisplay time={time} />
        </div>
      </div>
    </section>
  );
};

export default ThemeClock;
