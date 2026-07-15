import React, { useState, useEffect } from "react";
import "./DadJokes.css";

const DadJokes = () => {
  const [joke, setJoke] = useState("Click the button to get a joke!");

  // Function to fetch a joke
  const generateJoke = async () => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    try {
      const response = await fetch("https://icanhazdadjoke.com", config);
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      setJoke("Oops! Failed to fetch a joke. Try again later.");
    }
  };

  useEffect(() => {
    generateJoke(); // Fetch an initial joke when the component loads
  }, []);

  return (
    <div className="container">
      <h3>Don't Laugh Challenge 😁</h3>
      <div className="joke">{joke}</div>
      <button className="btn" onClick={generateJoke}>
        Get Another Joke
      </button>
    </div>
  );
};

export default DadJokes;
