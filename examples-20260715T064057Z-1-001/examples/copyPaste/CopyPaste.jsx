import React, { useState } from "react";
import "./copyPaste.css";

const CopyPaste = () => {
  const [inputText, setInputText] = useState("");
  const [copiedText, setCopiedText] = useState("");

  const handleInputChange = e => {
    setInputText(e.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(inputText).then(
      () => {
        setCopiedText(inputText);
        alert("Text copied to clipboard!");
      },
      err => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  const handlePaste = () => {
    navigator.clipboard.readText().then(
      text => {
        setInputText(text);
        alert("Text pasted from clipboard!");
      },
      err => {
        console.error("Could not read text: ", err);
      }
    );
  };

  return (
    <div className="app-container">
      <h1>Copy-Paste Application</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type something here..."
        rows="5"
        cols="30"
      ></textarea>
      <div className="buttons">
        <button onClick={handleCopy}>Copy</button>
        <button onClick={handlePaste}>Paste</button>
      </div>
      <div className="copied-text">
        <h3>Copied Text:</h3>
        <p>{copiedText}</p>
      </div>
    </div>
  );
};

export default CopyPaste;
