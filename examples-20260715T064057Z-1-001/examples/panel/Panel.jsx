import React, { useState } from "react";
import "./panel.css";
const Panel = () => {
  const [openPanel, setOpenPanel] = useState(null);

  const toggleOpen = index => {
    setOpenPanel(openPanel === index ? null : index);
  };

  const isActive = (index, propertyName) => {
    return propertyName.includes("flex") && openPanel === index;
  };

  return (
    <div className="panels">
      {panelsData.map((panel, index) => (
        <div
          key={index}
          className={`panel ${panel.class} ${
            openPanel === index ? "open" : ""
          } ${openPanel === index ? "open-active" : ""}`}
          onClick={() => toggleOpen(index)}
          onTransitionEnd={e =>
            isActive(index, e.propertyName) && setOpenPanel(index)
          }
        >
          {panel.text.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

const panelsData = [
  {
    class: "panel1",
    text: ["Hey", "Let's", "Dance"],
  },
  {
    class: "panel2",
    text: ["Give", "Take", "Receive"],
  },
  {
    class: "panel3",
    text: ["Experience", "It", "Today"],
  },
  {
    class: "panel4",
    text: ["Give", "All", "You can"],
  },
  {
    class: "panel5",
    text: ["Life", "In", "Motion"],
  },
];

export default Panel;
