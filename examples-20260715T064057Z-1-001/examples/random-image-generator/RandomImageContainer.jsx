import React from "react";
import RandomImageFeed from "./RandomImageFeed";
import "./randomImage.css";
const RandomImageContainer = () => {
  return (
    <section className="main-container">
      <h1 className="title">Random Image Feed</h1>
      <RandomImageFeed />
    </section>
  );
};

export default RandomImageContainer;
