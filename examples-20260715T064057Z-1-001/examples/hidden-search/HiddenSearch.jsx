import { useState } from "react";
import "./hiddenSearch.css";
import { FaSearch } from "react-icons/fa";
const HiddenSearch = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`hidden-search ${isActive ? "active" : ""}`}>
      <div className="search">
        <input
          type="text"
          className="input"
          placeholder="Search here..."
          autoFocus={isActive}
        />
        <button className="btn" onClick={handleToggle}>
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default HiddenSearch;


//! 8. HiddenSearch: Hidden Search Bar
// Create a search bar that is hidden initially and can be toggled visible with a button.

// What to create:

// A hidden search bar that appears when the user clicks a button.