//! Create a react application with an interactive set of toggles where users can choose between "Good," "Cheap," and "Fast," but only two options can be selected at a time. If the user selects a third option, the code automatically deselects one of the previously selected options.
import React, { useState } from "react";
import "./style.css";

const GoodCheapFast = () => {
  const [toggles, setToggles] = useState({
    good: false,
    cheap: false,
    fast: false,
  });

  const handleToggle = clicked => {
    setToggles(prevToggles => {
      const updatedToggles = {
        ...prevToggles,
        [clicked]: !prevToggles[clicked],
      };

      // Ensure only two can be selected
      if (updatedToggles.good && updatedToggles.cheap && updatedToggles.fast) {
        if (clicked === "good") updatedToggles.fast = false;
        if (clicked === "cheap") updatedToggles.good = false;
        if (clicked === "fast") updatedToggles.cheap = false;
      }

      return updatedToggles;
    });
  };

  return (
    <div className="container">
      <h2>How do you want your project to be?</h2>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="good"
          className="toggle"
          checked={toggles.good}
          onChange={() => handleToggle("good")}
        />
        <label htmlFor="good" className="label">
          <div className="ball"></div>
        </label>
        <span>Good</span>
      </div>

      <div className="toggle-container">
        <input
          type="checkbox"
          id="cheap"
          className="toggle"
          checked={toggles.cheap}
          onChange={() => handleToggle("cheap")}
        />
        <label htmlFor="cheap" className="label">
          <div className="ball"></div>
        </label>
        <span>Cheap</span>
      </div>

      <div className="toggle-container">
        <input
          type="checkbox"
          id="fast"
          className="toggle"
          checked={toggles.fast}
          onChange={() => handleToggle("fast")}
        />
        <label htmlFor="fast" className="label">
          <div className="ball"></div>
        </label>
        <span>Fast</span>
      </div>
    </div>
  );
};

export default GoodCheapFast;
