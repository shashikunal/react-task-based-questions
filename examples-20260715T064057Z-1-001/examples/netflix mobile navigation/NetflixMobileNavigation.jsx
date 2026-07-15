//! Create the sliding navigation bar for netflix using react.
import React, { useState } from "react";
import "./style.css"; 
import { FaBars } from "react-icons/fa";
import Navbar from "./Navbar";

function NetflixMobileNavigation() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleNav = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="main">
      <button className="nav-btn open-btn" onClick={toggleNav}>
        <FaBars />
      </button>

      <img
        src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
        alt="Logo"
        className="logo"
      />

      <p className="text">Mobile Navigation</p>

      <Navbar toggleNav={toggleNav} visible={isVisible} />
    </div>
  );
}

export default NetflixMobileNavigation;
