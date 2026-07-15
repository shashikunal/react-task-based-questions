import React from "react";


const Box = ({ row, col }) => {
  const backgroundPosition = `${-col * 125}px ${-row * 125}px`;

  return (
    <div
      className="box"
      style={{
        backgroundPosition,
      }}
    />
  );
};

export default Box;
