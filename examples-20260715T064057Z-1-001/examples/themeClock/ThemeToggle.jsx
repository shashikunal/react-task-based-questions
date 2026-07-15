import React from "react";

const ThemeToggle = ({ isDarkMode, toggleMode }) => {
  return (
    <button className="toggle" onClick={toggleMode}>
      {isDarkMode ? "Light mode" : "Dark mode"}
    </button>
  );
};

export default ThemeToggle;
