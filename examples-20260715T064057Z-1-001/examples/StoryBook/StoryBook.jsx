// Storybook.js
import React, { useState } from "react";
import "./storybook.css"; // Importing the CSS file

const Storybook = () => {
  const [story, setStory] = useState(
    "You wake up in a mysterious forest. What will you do?"
  );
  const [choice, setChoice] = useState(null);

  const handleChoice = decision => {
    setChoice(decision);
    if (decision === "explore") {
      setStory("You explore deeper into the forest and find a treasure chest.");
    } else if (decision === "stay") {
      setStory("You stay put, and soon a stranger appears offering help.");
    }
  };

  return (
    <div className={`storybook ${choice ? "choice-made" : ""}`}>
      <h1 className="story-text">{story}</h1>
      {!choice && (
        <div className="buttons">
          <button
            className="storybook-button"
            onClick={() => handleChoice("explore")}
          >
            Explore the forest
          </button>
          <button
            className="storybook-button"
            onClick={() => handleChoice("stay")}
          >
            Stay where you are
          </button>
        </div>
      )}
    </div>
  );
};

export default Storybook;
