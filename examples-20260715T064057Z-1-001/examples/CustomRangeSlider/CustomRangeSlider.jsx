import React, { useState } from "react";
import "./CustomRangeSlider.css";

const CustomRangeSlider = () => {
  const [value, setValue] = useState(50);

  const handleRangeChange = (e) => {
    const value = +e.target.value;
    setValue(value);
  };

  return (
    <div className="range-container">
      <h2>Custom Range Slider</h2>
      <input
        type="range"
        id="range"
        min="0"
        max="100"
        value={value}
        onInput={handleRangeChange}
      />
      <label htmlFor="range" style={{ left: `${(value * 300) / 100}px` }}>
        {value}
      </label>
    </div>
  );
};

export default CustomRangeSlider;
