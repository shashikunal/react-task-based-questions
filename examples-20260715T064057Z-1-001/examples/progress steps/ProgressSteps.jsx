//! Create a react application to provide progress steps. There is a progress bar and two buttons to go to next step and previous step. At first step previous button is disabled and at last last step next button is disabled.
import React, { useState } from "react";
import "./style.css";

const ProgressSteps = () => {
  let totalSteps=4
  const [active, setActive] = useState(1);

  const updateProgressWidth = () =>
    ((active - 1) / (totalSteps - 1)) * 100 + "%";

  let arr = new Array(totalSteps).fill(0);

  return (
    <div className="container">
      <div className="progressContainer" style={{ width: 88 * totalSteps }}>
        <div
          className="progress"
          style={{ width: updateProgressWidth() }}
        ></div>
        {arr.map((value, index) => (
          <div
            key={index}
            className={`circle ${index < active ? "active" : ""}`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <button
        className="btn"
        onClick={() => setActive(prev => (prev < 1 ? (prev = 1) : (prev -= 1)))}
        disabled={active === 1}
      >
        Prev
      </button>
      <button
        className="btn"
        onClick={() =>
          setActive(prev =>
            prev > totalSteps ? (prev = totalSteps) : (prev += 1)
          )
        }
        disabled={active === totalSteps}
      >
        Next
      </button>
    </div>
  );
};

export default ProgressSteps;
