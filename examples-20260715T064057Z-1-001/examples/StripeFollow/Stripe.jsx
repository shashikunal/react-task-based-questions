import React, { useState, useRef } from "react";
import "./stripe.css"; // Include the styles in a separate CSS file

const Stripe = () => {
  const [backgroundStyles, setBackgroundStyles] = useState({
    width: "0",
    height: "0",
    transform: "translate(0, 0)",
    opacity: 0,
  });

  const navRef = useRef(null);

  const handleEnter = event => {
    const trigger = event.currentTarget;
    trigger.classList.add("trigger-enter");
    setTimeout(() => {
      if (trigger.classList.contains("trigger-enter")) {
        trigger.classList.add("trigger-enter-active");
      }
    }, 150);

    const dropdown = trigger.querySelector(".dropdown");
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = navRef.current.getBoundingClientRect();

    const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left,
    };

    setBackgroundStyles({
      width: `${coords.width}px`,
      height: `${coords.height}px`,
      transform: `translate(${coords.left}px, ${coords.top}px)`,
      opacity: 1,
    });
  };

  const handleLeave = event => {
    const trigger = event.currentTarget;
    trigger.classList.remove("trigger-enter", "trigger-enter-active");
    setBackgroundStyles({
      ...backgroundStyles,
      opacity: 0,
    });
  };

  return (
    <nav className="top" ref={navRef}>
      <div className="dropdownBackground" style={backgroundStyles}>
        <span className="arrow"></span>
      </div>

      <ul className="cool">
        <li onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
          <a href="#">About Me</a>
          <div className="dropdown dropdown1">
            <div className="bio">
              <img
                src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGF0dGVybnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Wes Bos"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                facilis reprehenderit, dolores iste, suscipit, possimus unde et
                minus laborum nam magni dicta praesentium! Alias, quo! Atque
                amet voluptatum cum quae?
              </p>
            </div>
          </div>
        </li>
        <li onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
          <a href="#">Courses</a>
          <ul className="dropdown courses">
            <li>
              <span className="code">RFB</span>
              <a href="https://ReactForBeginners.com"> React For Beginners</a>
            </li>
            <li>
              <span className="code">ES6</span>
              <a href="https://ES6.io"> ES6 For Everyone</a>
            </li>
            <li>
              <span className="code">NODE</span>
              <a href="https://LearnNode.com"> Learn Node</a>
            </li>
            <li>
              <span className="code">STPU</span>
              <a href="https://SublimeTextBook.com"> Sublime Text Power User</a>
            </li>
            <li>
              <span className="code">WTF</span>
              <a href="http://Flexbox.io"> What The Flexbox?!</a>
            </li>
            <li>
              <span className="code">GRID</span>
              <a href="https://CSSGrid.io"> CSS Grid</a>
            </li>
            <li>
              <span className="code">LRX</span>
              <a href="http://LearnRedux.com"> Learn Redux</a>
            </li>
            <li>
              <span className="code">CLPU</span>
              <a href="http://CommandLinePowerUser.com">
                Command Line Power User
              </a>
            </li>
            <li>
              <span className="code">MMD</span>
              <a href="http://MasteringMarkdown.com"> Mastering Markdown</a>
            </li>
          </ul>
        </li>
        <li onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
          <a href="#">Other Links</a>
          <ul className="dropdown dropdown3">
            <li>
              <a className="button" href="http://twitter.com/wesbos">
                Twitter
              </a>
            </li>
            <li>
              <a className="button" href="http://facebook.com/wesbos.developer">
                Facebook
              </a>
            </li>
            <li>
              <a className="button" href="http://wesbos.com">
                Blog
              </a>
            </li>
            <li>
              <a className="button" href="http://wesbos.com/courses">
                Course Catalog
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Stripe;
