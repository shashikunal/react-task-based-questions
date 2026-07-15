import React, { useRef } from "react";
import "./DragDrop.css";

const DragDrop = () => {
  const fillRef = useRef(null);

  const dragStart = e => {
    e.currentTarget.className += " hold";
    setTimeout(() => {
      e.currentTarget.className = "invisible";
    }, 0);
  };

  const dragEnd = e => {
    e.currentTarget.className = "fill";
  };

  const dragOver = e => {
    e.preventDefault();
  };

  const dragEnter = e => {
    e.preventDefault();
    e.currentTarget.className += " hovered";
  };

  const dragLeave = e => {
    e.currentTarget.className = "empty";
  };

  const dragDrop = e => {
    e.currentTarget.className = "empty";
    e.currentTarget.appendChild(fillRef.current);
  };

  return (
    <div className="container">
      <div
        className="empty"
        onDragOver={dragOver}
        onDrop={dragDrop}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
      >
        <div
          className="fill"
          draggable="true"
          ref={fillRef}
          onDragStart={dragStart}
          onDragEnd={dragEnd}
        ></div>
      </div>
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="empty"
          onDragOver={dragOver}
          onDrop={dragDrop}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
        ></div>
      ))}
    </div>
  );
};

export default DragDrop;
