import React, { useState } from "react";
import PlayStation from "./PlayStation";
import Xbox from "./Xbox";
import "./style.css";

const GamingLandingPage = () => {
  const [hoverClass, setHoverClass] = useState("");

  const handleHover = (hoverClass) => {
    setHoverClass(hoverClass);
  };

  return (
    <div className={`container ${hoverClass}`}>
      <PlayStation onHover={handleHover} />
      <Xbox onHover={handleHover} />
    </div>
  );
};

export default GamingLandingPage;
