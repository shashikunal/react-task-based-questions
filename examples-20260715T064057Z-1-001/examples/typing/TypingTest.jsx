import React, { useState, useEffect, useRef } from "react";
import "./TypingTest.css";

const sampleParagraphs = [
  "The quick brown fox jumps over the lazy dog.",
  "React is a popular JavaScript library for building user interfaces.",
  "Coding challenges can improve your problem-solving skills.",
];

function TypingTest() {
  const [paragraph, setParagraph] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [completed, setCompleted] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    setParagraph(
      sampleParagraphs[Math.floor(Math.random() * sampleParagraphs.length)]
    );
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsRunning(false);
      clearInterval(timerRef.current);
      calculateResults();
      setCompleted(true);
    }
  }, [timeLeft]);

  const startTest = () => {
    setIsRunning(true);
    setCompleted(false);
    setInputValue("");
    setTimeLeft(30);
    setWpm(0);
    setAccuracy(100);
    timerRef.current = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
  };

  const handleChange = e => {
    const value = e.target.value;
    setInputValue(value);

    const wordsTyped = value.trim().split(" ").length;
    const correctChars = value
      .split("")
      .filter((char, idx) => char === paragraph[idx]).length;
    const totalChars = value.length;

    setWpm(Math.floor((wordsTyped / (60 - timeLeft)) * 60));
    setAccuracy(
      totalChars ? Math.floor((correctChars / totalChars) * 100) : 100
    );
  };

  const calculateResults = () => {
    const wordsTyped = inputValue.trim().split(" ").length;
    setWpm(wordsTyped);
  };

  return (
    <div className="typing-test">
      {!isRunning && !completed && (
        <button className="start-button" onClick={startTest}>
          Start Typing Test
        </button>
      )}
      {isRunning && (
        <div>
          <div
            className="timer-bar"
            style={{ width: `${(timeLeft / 30) * 100}%` }}
          ></div>
          <p className="paragraph">{paragraph}</p>
          <textarea
            className="typing-area"
            value={inputValue}
            onChange={handleChange}
            placeholder="Start typing here..."
            disabled={!isRunning}
          />
          <div className="metrics">
            <p>Time Left: {timeLeft}s</p>
            <p>WPM: {wpm}</p>
            <p>Accuracy: {accuracy}%</p>
          </div>
        </div>
      )}
      {completed && (
        <div className="results-screen">
          <h2>Results</h2>
          <p>WPM: {wpm}</p>
          <p>Accuracy: {accuracy}%</p>
          <button className="restart-button" onClick={startTest}>
            Restart Test
          </button>
        </div>
      )}
    </div>
  );
}

export default TypingTest;
