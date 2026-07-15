import React, { useState } from "react";
import "./sort.css";

const Sort = () => {
  const initialBands = [
    "The Plot in You",
    "The Devil Wears Prada",
    "Pierce the Veil",
    "Norma Jean",
    "The Bled",
    "Say Anything",
    "The Midway State",
    "We Came as Romans",
    "Counterparts",
    "Oh, Sleeper",
    "A Skylit Drive",
    "Anywhere But Here",
    "An Old Dog",
  ];

  const [bands, setBands] = useState(initialBands);

  const strip = bandName => bandName.replace(/^(a |the |an )/i, "").trim();

  const handleSort = () => {
    const sortedBands = [...bands].sort((a, b) =>
      strip(a) > strip(b) ? 1 : -1
    );
    setBands(sortedBands);
  };

  return (
    <div className="App">
      <section className="btn_Section">
        <button className="button-42" onClick={handleSort}>
          Sort
        </button>
      </section>
      <ul id="bands">
        {bands.map((band, index) => (
          <li key={index}>{band}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sort;
