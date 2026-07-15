import React, { useRef, useState } from "react";
import "./VideoSpeedScrubber.css";

const VideoSpeed = () => {
  const [playbackRate, setPlaybackRate] = useState(1);
  const speedRef = useRef(null);
  const barRef = useRef(null);
  const videoRef = useRef(null);

  const handleMove = e => {
    const speed = speedRef.current;
    const bar = barRef.current;
    const video = videoRef.current;

    const y = e.pageY - speed.offsetTop;
    const percent = y / speed.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + "%";
    const newPlaybackRate = percent * (max - min) + min;

    bar.style.height = height;
    bar.textContent = newPlaybackRate.toFixed(2) + "×";
    video.playbackRate = newPlaybackRate;
    setPlaybackRate(newPlaybackRate);
  };

  return (
    <div className="wrapper">
      <video
        className="flex"
        width="765"
        height="430"
        src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
        loop
        controls
        ref={videoRef}
      ></video>
      <div className="speed" ref={speedRef} onMouseMove={handleMove}>
        <div className="speed-bar" ref={barRef}>
          {playbackRate.toFixed(2)}×
        </div>
      </div>
    </div>
  );
};

export default VideoSpeed;
