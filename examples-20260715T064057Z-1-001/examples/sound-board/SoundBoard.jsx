import  { useState } from "react";
import SOUNDS from "./audio.json";
import Sound from "./Sound";
import "./sound.css";
const SoundBoard = () => {
  let [currentPlaying, setCurrentPlaying] = useState(null);
  return (
    <section className="sound-container">
      {SOUNDS.map((sound, i) => (
        <>
          <Sound
            sound={sound}
            key={i}
            currentPlaying={currentPlaying}
            setCurrentPlaying={setCurrentPlaying}
          />
        </>
      ))}
    </section>
  );
};

export default SoundBoard;
