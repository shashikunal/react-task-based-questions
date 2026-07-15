import React, { useState } from "react";
import "./DrinkWater.css";

const DrinkWater = () => {
  const [fullCups, setFullCups] = useState(0);
  const totalCups = 8;

  const highlightCups = idx => {
    if (idx === totalCups - 1 && fullCups === totalCups) {
      idx--;
    } else if (
      fullCups > idx &&
      document.querySelector(`.cup-small.full:nth-child(${idx + 2})`) === null
    ) {
      idx--;
    }
    setFullCups(idx + 1);
  };

  const litersRemaining = (2 - (250 * fullCups) / 1000).toFixed(2);

  return (
    <div className="container">
      <h1>Drink Water</h1>
      <h3>Goal: 2 Liters</h3>

      <div className="cup">
        <div
          className="remained"
          style={{
            visibility: fullCups === totalCups ? "hidden" : "visible",
            height: fullCups === totalCups ? 0 : "auto",
          }}
        >
          <span>{litersRemaining}L</span>
          <small>Remained</small>
        </div>

        <div
          className="percentage"
          style={{
            visibility: fullCups === 0 ? "hidden" : "visible",
            height: `${(fullCups / totalCups) * 330}px`,
          }}
        >
          {fullCups === 0
            ? ""
            : `${((fullCups / totalCups) * 100).toFixed(0)}%`}
        </div>
      </div>

      <p className="text">
        Select how many glasses of water that you have drank
      </p>

      <div className="cups">
        {Array.from({ length: totalCups }, (_, idx) => (
          <div
            key={idx}
            className={`cupSmall ${idx < fullCups ? "full" : ""}`}
            onClick={() => highlightCups(idx)}
          >
            250 ml
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinkWater;
