import React, { useState } from "react";
import BoxesContainer from "./BoxesContainer";
import "./box.css";

const MagicBoxes = () => {
  const [isBig, setIsBig] = useState(true);

  const toggleSize = () => {
    setIsBig(!isBig);
  };

  return (
    <div>
      <button id="btn" className="magic" onClick={toggleSize}>
        Magic 🎩
      </button>
      <BoxesContainer isBig={isBig} />
    </div>
  );
};

export default MagicBoxes;
