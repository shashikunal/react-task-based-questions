import React, { useRef, useState } from "react";
import "./Player.css";

const CustomVideoPlayer = () => {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const updateButton = () => {
    setIsPlaying(!videoRef.current.paused);
  };

  const handleSkip = skipTime => {
    const video = videoRef.current;
    video.currentTime += skipTime;
  };

  const handleRangeUpdate = (name, value) => {
    const video = videoRef.current;
    video[name] = value;

    if (name === "volume") setVolume(value);
    if (name === "playbackRate") setPlaybackRate(value);
  };

  const handleProgress = () => {
    const video = videoRef.current;
    const percent = (video.currentTime / video.duration) * 100;
    progressBarRef.current.style.flexBasis = `${percent}%`;
  };

  const scrub = e => {
    const scrubTime =
      (e.nativeEvent.offsetX / progressRef.current.offsetWidth) *
      videoRef.current.duration;
    videoRef.current.currentTime = scrubTime;
  };

  return (
    <div className="container">
      <div className="player">
        <video
          ref={videoRef}
          className="viewer"
          src="./652333414.mp4"
          onClick={togglePlay}
          onPlay={updateButton}
          onPause={updateButton}
          onTimeUpdate={handleProgress}
        ></video>

        <div className="playerControls">
          <div
            className="playerProgress"
            ref={progressRef}
            onClick={scrub}
            onMouseDown={e => e.buttons === 1 && scrub(e)}
          >
            <div className="progressFilled" ref={progressBarRef}></div>
          </div>
          <button className="toggle" title="Toggle Play" onClick={togglePlay}>
            {isPlaying ? "❚ ❚" : "►"}
          </button>
          <input
            type="range"
            name="volume"
            className="player-slider"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={e => handleRangeUpdate("volume", e.target.value)}
          />
          <input
            type="range"
            name="playbackRate"
            className="player-slider"
            min="0.5"
            max="2"
            step="0.1"
            value={playbackRate}
            onChange={e => handleRangeUpdate("playbackRate", e.target.value)}
          />
          <button className="player-button" onClick={() => handleSkip(-10)}>
            « 10s
          </button>
          <button className="player-button" onClick={() => handleSkip(25)}>
            25s »
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
