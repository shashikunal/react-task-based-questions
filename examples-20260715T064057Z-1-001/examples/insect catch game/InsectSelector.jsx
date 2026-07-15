import React from "react";
import "./style.css";

const insects = [
  { name: "Fly", src: "http://pngimg.com/uploads/fly/fly_PNG3946.png" },
  {
    name: "Mosquito",
    src: "http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png",
  },
  { name: "Spider", src: "http://pngimg.com/uploads/spider/spider_PNG12.png" },
  { name: "Roach", src: "http://pngimg.com/uploads/roach/roach_PNG12163.png" },
];

const InsectSelector = ({ onSelect }) => (
  <div className="screen">
    <h1>What is your "favourite" insect</h1>
    <ul className="insectList">
      {insects.map((insect, index) => (
        <li key={index} className="insectItem">
          <button className="insectButton" onClick={() => onSelect(insect)}>
            <p>{insect.name}</p>
            <img src={insect.src} alt={insect.name} />
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default InsectSelector;
