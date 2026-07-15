import React, { useRef, useState } from "react";
import "./DrawingApp.css";

const DrawingApp = () => {
  const canvasRef = useRef(null);
  const [size, setSize] = useState(10);
  const [color, setColor] = useState("black");
  const [isPressed, setIsPressed] = useState(false);
  const [lastPosition, setLastPosition] = useState({
    x: undefined,
    y: undefined,
  });

  const drawCircle = (ctx, x, y) => {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  };

  const drawLine = (ctx, x1, y1, x2, y2) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
  };

  const handleMouseDown = e => {
    setIsPressed(true);
    setLastPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    setLastPosition({ x: undefined, y: undefined });
  };

  const handleMouseMove = e => {
    if (!isPressed) return;

    const ctx = canvasRef.current.getContext("2d");
    const x2 = e.nativeEvent.offsetX;
    const y2 = e.nativeEvent.offsetY;

    drawCircle(ctx, x2, y2);
    drawLine(ctx, lastPosition.x, lastPosition.y, x2, y2);

    setLastPosition({ x: x2, y: y2 });
  };

  const clearCanvas = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  return (
    <div className="container">
      <canvas
        ref={canvasRef}
        width={800}
        height={400}
        className="canvas"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      />
      <div className="toolbox">
        <button onClick={() => setSize(prev => Math.min(prev + 5, 50))}>
          +
        </button>
        <span>{size}</span>
        <button onClick={() => setSize(prev => Math.max(prev - 5, 5))}>
          -
        </button>
        <input
          type="color"
          value={color}
          onChange={e => setColor(e.target.value)}
        />
        <button onClick={clearCanvas}>X</button>
      </div>
    </div>
  );
};

export default DrawingApp;
