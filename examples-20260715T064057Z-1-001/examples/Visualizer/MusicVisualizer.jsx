import React, { useState, useRef, useEffect } from "react";
import "./Visualizer.css";

const MusicVisualizer = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [audio, setAudio] = useState(null);
  const [audioContext, setAudioContext] = useState(null);
  const [analyser, setAnalyser] = useState(null);
  const [dataArray, setDataArray] = useState(null);
  const [frequencyData, setFrequencyData] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const canvasRef = useRef(null);

  useEffect(() => {
    if (audio) {
      const context = new (window.AudioContext || window.webkitAudioContext)();
      setAudioContext(context);
      const analyserNode = context.createAnalyser();
      analyserNode.fftSize = 256; // Set frequency resolution
      setAnalyser(analyserNode);

      const source = context.createMediaElementSource(audio);
      source.connect(analyserNode);
      analyserNode.connect(context.destination);

      const bufferLength = analyserNode.frequencyBinCount;
      const newDataArray = new Uint8Array(bufferLength);
      setDataArray(newDataArray);

      const animate = () => {
        analyserNode.getByteFrequencyData(newDataArray);
        setFrequencyData([...newDataArray]);
        requestAnimationFrame(animate);
      };

      animate();
    }
  }, [audio]);

  // Handle file upload
  const handleFileUpload = event => {
    const file = event.target.files[0];
    const audioElement = new Audio(URL.createObjectURL(file));
    setAudio(audioElement);
  };

  // Play or Pause the audio
  const togglePlayPause = () => {
    if (audioContext && analyser) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Visualization Function for Bars
  const renderBars = () => {
    if (!frequencyData || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const barWidth = (width / frequencyData.length) * 2.5;

    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < frequencyData.length; i++) {
      const barHeight = frequencyData[i];
      const red = Math.min(255, barHeight + 100);
      const green = Math.min(255, 255 - barHeight);
      const blue = Math.min(255, barHeight);
      ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
      ctx.fillRect(i * barWidth, height - barHeight, barWidth, barHeight);
    }
  };

  // Use effect to render visualization bars
  useEffect(() => {
    renderBars();
  }, [frequencyData]);

  return (
    <div className="visualizer-container">
      <div className="controls">
        <input type="file" onChange={handleFileUpload} />
        <button
          className={`play-pause-btn ${isPlaying ? "pause" : "play"}`}
          onClick={togglePlayPause}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>

      <div className="visualization">
        <canvas ref={canvasRef} width="800" height="400" />
      </div>
    </div>
  );
};

export default MusicVisualizer;
