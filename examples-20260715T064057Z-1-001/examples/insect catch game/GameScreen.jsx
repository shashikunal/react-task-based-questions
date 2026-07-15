import React from "react";
import "./style.css";

const GameScreen = ({ onStart }) => (
  <div className="screen">
    <h1>Catch The Insect</h1>
    <button className="button" onClick={onStart}>
      Play Game
    </button>
  </div>
);

export default GameScreen;
