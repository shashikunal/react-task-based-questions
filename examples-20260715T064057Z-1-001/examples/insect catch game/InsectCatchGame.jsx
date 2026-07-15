//! Create a game using react, where on first user will start the game, then he will select the respective insect and the game will start. In the game the particular insect will be displayed randomly on screen and on clicking the insect you will get one point. But every time you will click on a insect, it will give rise to two more insects randomly after 1 and 1.5 sec respectivley and once the user score reaches 20, he will get a popup saying it is an infine game.
import React, { useState } from "react";
import "./style.css";
import GameScreen from "./GameScreen";
import InsectSelector from "./InsectSelector";
import GamePlay from "./GamePlay";

const InsectCatchGame = () => {
  const [screen, setScreen] = useState(0); // 0: Start, 1: Select Insect, 2: Gameplay
  const [selectedInsect, setSelectedInsect] = useState(null);

  const handleStart = () => setScreen(1);
  const handleSelectInsect = insect => {
    setSelectedInsect(insect);
    setScreen(2);
  };

  return (
    <div className="container">
      {screen === 0 && <GameScreen onStart={handleStart} />}
      {screen === 1 && <InsectSelector onSelect={handleSelectInsect} />}
      {screen === 2 && <GamePlay selectedInsect={selectedInsect} />}
    </div>
  );
};

export default InsectCatchGame;
