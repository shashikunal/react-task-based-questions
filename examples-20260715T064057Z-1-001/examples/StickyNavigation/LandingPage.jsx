import React from "react";
import Navbar from "./Navbar";
import "./Stickynavigation.css";
import Hero from "./Hero";
import Bottom from "./Bottom";

const LandingPage = () => {
  return (
    <section id="landingPageSection">
      <Navbar />
      <Hero />
      <Bottom />
    </section>
  );
};

export default LandingPage;
