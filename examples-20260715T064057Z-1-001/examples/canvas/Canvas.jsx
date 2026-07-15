import React, { useRef, useEffect, useState } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [hue, setHue] = useState(0);
  const [lineWidth, setLineWidth] = useState(100);
  const [direction, setDirection] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    ctx.lineJoin = "round";
    ctx.lineCap = "round";
  }, []);

  const draw = e => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.lineWidth = lineWidth;

    ctx.beginPath();
    ctx.moveTo(lastPosition.x, lastPosition.y);
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();

    setLastPosition({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });

    setHue(prevHue => (prevHue >= 360 ? 0 : prevHue + 1));

    if (lineWidth >= 100 || lineWidth <= 1) {
      setDirection(prevDirection => !prevDirection);
    }

    setLineWidth(prevLineWidth =>
      direction ? prevLineWidth + 1 : prevLineWidth - 1
    );
  };

  const handleMouseDown = e => {
    setIsDrawing(true);
    setLastPosition({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });
  };

  const handleMouseUpOrOut = () => {
    setIsDrawing(false);
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={draw}
      onMouseUp={handleMouseUpOrOut}
      onMouseOut={handleMouseUpOrOut}
      style={{ display: "block", width: "100vw", height: "100vh" }}
    />
  );
};

export default Canvas;
