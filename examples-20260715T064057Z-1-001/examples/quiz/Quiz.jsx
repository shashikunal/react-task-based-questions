import React, { useState } from "react";
import quizData from "./quizData.json";
import Question from "./Question";
import "./quiz.css";

function Quiz() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = answer => {
    if (answer === quizData[currentQuiz].correct) {
      setScore(score + 1);
    }
    if (currentQuiz + 1 < quizData.length) {
      setCurrentQuiz(currentQuiz + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="quiz-header">
          <h2>
            You answered {score}/{quizData.length} questions correctly
          </h2>
          <button onClick={() => window.location.reload()}>Reload</button>
        </div>
      ) : (
        <Question data={quizData[currentQuiz]} handleAnswer={handleAnswer} />
      )}
    </div>
  );
}

export default Quiz;
