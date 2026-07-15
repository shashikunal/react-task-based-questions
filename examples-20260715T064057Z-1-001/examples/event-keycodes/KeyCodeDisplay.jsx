import React, { useState } from "react";
import "./KeyCodeDisplay.css";

const EventKeyCodes = () => {
  const [keyDetails, setKeyDetails] = useState({
    key: "Press any key",
    keyCode: "",
    code: "",
  });

  const handleKeyDown = event => {
    setKeyDetails({
      key: event.key === " " ? "Space" : event.key,
      keyCode: event.keyCode,
      code: event.code,
    });
  };

  return (
    <div className="container" tabIndex="0" onKeyDown={handleKeyDown}>
      <div className="key">
        {keyDetails.key}
        <small>event.key</small>
      </div>
      {keyDetails.keyCode && (
        <>
          <div className="key">
            {keyDetails.keyCode}
            <small>event.keyCode</small>
          </div>
          <div className="key">
            {keyDetails.code}
            <small>event.code</small>
          </div>
        </>
      )}
    </div>
  );
};

export default EventKeyCodes;
