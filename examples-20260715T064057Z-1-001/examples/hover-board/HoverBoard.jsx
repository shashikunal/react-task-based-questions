import ColorBox from "./ColorBox";
import "./hover.css";
let HoverBoard = () => {
  const colorBoxes = [...Array(204)].map((_, index) => (
    <ColorBox key={index} />
  ));

  return <div className="color-container">{colorBoxes}</div>;
};

export default HoverBoard;

//! 9. HoverBoard: Hover Effects Board
// Create a board where each item changes when the user hovers over it.

// What to create:

// A set of items (e.g., divs) that change color, size, or style when hovered over.
