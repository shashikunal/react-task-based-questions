import { useEffect, useRef, useState } from "react";

const Sound = ({ sound, currentPlaying, setCurrentPlaying }) => {
  let myRef = useRef("");
  let [play, setPlay] = useState(true);
  const handlePlay = () => {
    if (currentPlaying && currentPlaying !== myRef.current) {
      currentPlaying.pause();
    }
    if (myRef.current.paused) {
      myRef.current.play();
      setCurrentPlaying(myRef.current);
    } else {
      myRef.current.pause();
      setCurrentPlaying(null);
    }
  };

  return (
    <div>
      <audio src={sound.path} ref={myRef}></audio>
      <button onClick={handlePlay} className="btn">
        {sound.name}
      </button>
    </div>
  );
};

export default Sound;
