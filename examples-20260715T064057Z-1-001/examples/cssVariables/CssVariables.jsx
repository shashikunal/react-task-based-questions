import React, { useState } from "react";
import "./variable.css";
function CssVariables() {
  const [base, setBase] = useState("#FC8F54");
  const [spacing, setSpacing] = useState(10);
  const [blur, setBlur] = useState(10);

  const handleUpdate = e => {
    const { name, value, dataset } = e.target;
    const suffix = dataset.sizing || "";
    if (name === "spacing") setSpacing(value);
    if (name === "blur") setBlur(value);
    if (name === "base") setBase(value);
  };

  return (
    <div className="varContainer">
      <h2>
        Update CSS with <span style={{ color: base }}>React</span>
      </h2>
      <div
        style={{
          textAlign: "center",
          color: "white",
          fontFamily: "'helvetica neue', sans-serif",
          fontWeight: 100,
          fontSize: "50px",
          width: "100%",
        }}
      >
        <div
          className="controls"
          style={{ marginBottom: "50px", display: "flex" }}
        >
          <section>
            <label htmlFor="spacing">Spacing:</label>
            <input
              id="spacing"
              type="range"
              name="spacing"
              min="10"
              max="200"
              value={spacing}
              data-sizing="px"
              onChange={handleUpdate}
            />
          </section>
          <section>
            <label htmlFor="blur">Blur:</label>
            <input
              id="blur"
              type="range"
              name="blur"
              min="0"
              max="25"
              value={blur}
              data-sizing="px"
              onChange={handleUpdate}
            />
          </section>
          <section>
            <label htmlFor="base">Base Color:</label>
            <input
              id="base"
              type="color"
              name="base"
              value={base}
              onChange={handleUpdate}
            />
          </section>
        </div>

        <img
          src="https://source.unsplash.com/7bwQXzbF6KE/800x500"
          alt="Example"
          style={{
            padding: `${spacing}px`,
            background: base,
            filter: `blur(${blur}px)`,
          }}
        />
      </div>
    </div>
  );
}

export default CssVariables;
