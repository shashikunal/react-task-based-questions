import React, { useEffect, useRef } from "react";
import "./drum.css";

const Drum = () => {
  const keysRef = useRef({});

  const playSound = keyCode => {
    const audio = keysRef.current[keyCode]?.audioRef;
    const key = keysRef.current[keyCode]?.keyRef;

    if (!audio || !key) return;

    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  };

  const handleKeyDown = e => {
    playSound(e.keyCode);
  };

  const removeTransition = keyCode => {
    const key = keysRef.current[keyCode]?.keyRef;
    if (key) {
      key.classList.remove("playing");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const keys = [
    { keyCode: 65, key: "A", sound: "clap", audio: "drum/clap.wav" },
    { keyCode: 83, key: "S", sound: "hihat", audio: "drum/hihat.wav" },
    { keyCode: 68, key: "D", sound: "kick", audio: "drum/kick.wav" },
    { keyCode: 70, key: "F", sound: "openhat", audio: "drum/openhat.wav" },
    { keyCode: 71, key: "G", sound: "boom", audio: "drum/boom.wav" },
    { keyCode: 72, key: "H", sound: "ride", audio: "drum/ride.wav" },
    { keyCode: 74, key: "J", sound: "snare", audio: "drum/snare.wav" },
    { keyCode: 75, key: "K", sound: "tom", audio: "drum/tom.wav" },
    { keyCode: 76, key: "L", sound: "tink", audio: "drum/tink.wav" },
  ];

  return (
    <div>
      <div className="keys">
        <div className="overlay"></div>
        <div className="keyContainer">
          {keys.map(({ keyCode, key, sound }) => (
            <div
              key={keyCode}
              ref={el =>
                (keysRef.current[keyCode] = {
                  ...keysRef.current[keyCode],
                  keyRef: el,
                })
              }
              data-key={keyCode}
              className="key"
              onTransitionEnd={() => removeTransition(keyCode)}
            >
              <kbd>{key}</kbd>
              <span className="sound">{sound}</span>
            </div>
          ))}
        </div>
      </div>

      {keys.map(({ keyCode, audio }) => (
        <audio
          key={keyCode}
          ref={el =>
            (keysRef.current[keyCode] = {
              ...keysRef.current[keyCode],
              audioRef: el,
            })
          }
          data-key={keyCode}
          src={audio}
        ></audio>
      ))}
    </div>
  );
};

export default Drum;
