import React, { useState } from "react";
import "./GradientGenerator.css";

const GradientGenerator = () => {
  // State to manage gradient colors and direction
  const [colors, setColors] = useState(["#ff7e5f", "#feb47b"]);
  const [direction, setDirection] = useState("to right");
  const [copied, setCopied] = useState(false); // State to manage the copied message

  const gradientCSS = `background: linear-gradient(${direction}, ${colors.join(
    ", "
  )});`;

  // Copy CSS code to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(gradientCSS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Hide "Copied" message after 2 seconds
  };

  // Add a new color input
  const addColor = () => {
    if (colors.length < 5) setColors([...colors, "#ffffff"]);
  };

  // Update color
  const updateColor = (index, newColor) => {
    const updatedColors = [...colors];
    updatedColors[index] = newColor;
    setColors(updatedColors);
  };

  return (
    <div className="gradient-container">
      <h1 className="title">CSS Gradient Generator 🎨</h1>

      {/* Gradient Preview */}
      <div
        className="gradient-preview"
        style={{
          background: `linear-gradient(${direction}, ${colors.join(", ")})`,
        }}
      ></div>

      {/* Gradient Controls */}
      <div className="controls">
        {/* Direction Selector */}
        <div className="control-group">
          <label>Direction:</label>
          <select
            value={direction}
            onChange={e => setDirection(e.target.value)}
          >
            <option value="to right">To Right</option>
            <option value="to left">To Left</option>
            <option value="to bottom">To Bottom</option>
            <option value="to top">To Top</option>
            <option value="45deg">45°</option>
            <option value="135deg">135°</option>
          </select>
        </div>

        {/* Color Pickers */}
        {colors.map((color, index) => (
          <div key={index} className="control-group">
            <label>Color {index + 1}:</label>
            <input
              type="color"
              value={color}
              onChange={e => updateColor(index, e.target.value)}
            />
          </div>
        ))}

        {/* Add Color Button */}
        {colors.length < 5 && (
          <button className="add-color-btn" onClick={addColor}>
            Add Color
          </button>
        )}
      </div>

      {/* CSS Code and Copy */}
      <div className="css-code">
        <h3>CSS Code:</h3>
        <pre>{gradientCSS}</pre>
        <div className="copy-section">
          <button className="copy-btn" onClick={copyToClipboard}>
            Copy CSS
          </button>
          {copied && <span className="copied-msg">Copied!</span>}
        </div>
      </div>
    </div>
  );
};

export default GradientGenerator;
