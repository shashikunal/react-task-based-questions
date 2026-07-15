import React, { useState } from "react";
import { elements } from "./elements"; // Import the dataset
import "./PeriodicTable.css";

function PeriodicTable() {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredElements =
    filter === "all" ? elements : elements.filter(el => el.category === filter);

  return (
    <div className="periodic-table-container">
      <h1 className="title">Interactive Periodic Table</h1>
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("nonmetal")}>Nonmetals</button>
        <button onClick={() => setFilter("noble gas")}>Noble Gases</button>
        <button onClick={() => setFilter("alkali metal")}>Alkali Metals</button>
      </div>
      <div className="table">
        {filteredElements.map(el => (
          <div
            key={el.number}
            className={`element ${
              hoveredElement === el.number ? "hovered" : ""
            }`}
            onMouseEnter={() => setHoveredElement(el.number)}
            onMouseLeave={() => setHoveredElement(null)}
          >
            <div className="symbol">{el.symbol}</div>
            {hoveredElement === el.number && (
              <div className="tooltip">
                <p>Atomic Number: {el.number}</p>
                <p>Name: {el.name}</p>
                <p>Category: {el.category}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PeriodicTable;
