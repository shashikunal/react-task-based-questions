import React from "react";
import { IoClose } from "react-icons/io5";
import "./style.css";

const Navbar = ({ toggleNav, visible }) => {
  return (
    <div className={`nav nav-black ${visible ? "visible" : ""}`}>
      <div className={`nav nav-red ${visible ? "visible" : ""}`}>
        <div className={`nav nav-white ${visible ? "visible" : ""}`}>
          <button className="nav-btn close-btn" onClick={toggleNav}>
            <IoClose />
          </button>

          <img
            src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
            alt="Logo"
            className="logo"
          />

          <ul className="list">
            <li>
              <a href="#">Teams</a>
            </li>
            <li>
              <a href="#">Locations</a>
            </li>
            <li>
              <a href="#">Life at Netflix</a>
            </li>
            <li>
              <ul>
                <li>
                  <a href="#">Netflix culture memo</a>
                </li>
                <li>
                  <a href="#">Work life balance</a>
                </li>
                <li>
                  <a href="#">Inclusion & diversity</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
