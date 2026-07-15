import React, { useState } from 'react';
import './AnimatedNavigate.css';

const AnimatedNavigate = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`nav ${isActive ? "active" : ''}`} id="nav">
      <ul>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
      <button
        className="icon"
        id="toggle"
        onClick={toggleNav}
        aria-label="Toggle Navigation"
      >
        <div className="line line1"></div>
        <div className="line line2"></div>
        
      </button>
    </nav>
  );
};

export default AnimatedNavigate;
