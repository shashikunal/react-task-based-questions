import React, { useState } from "react";
import "./TextAnalyzer.css";

const TextAnalyzer = () => {
  const [text, setText] = useState("");

  const handleChange = e => {
    setText(e.target.value);
  };

  const countWords = () => {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  };

  const countCharacters = () => {
    return text.length;
  };

  const countSentences = () => {
    const sentences = text.match(/[^.!?]+[.!?]/g);
    return sentences ? sentences.length : 0;
  };

  const countParagraphs = () => {
    const paragraphs = text.split(/\n+/).filter(p => p.trim() !== "");
    return paragraphs.length;
  };

  return (
    <div className="app">
      <div className="header">
        <div className="stat">
          <h3>Words</h3>
          <p>{countWords()}</p>
        </div>
        <div className="stat">
          <h3>Characters</h3>
          <p>{countCharacters()}</p>
        </div>
        <div className="stat">
          <h3>Sentences</h3>
          <p>{countSentences()}</p>
        </div>
        <div className="stat">
          <h3>Paragraphs</h3>
          <p>{countParagraphs()}</p>
        </div>
      </div>
      <textarea
        className="text-area"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextAnalyzer;
