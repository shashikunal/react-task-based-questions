import React, { useState } from "react";

function Question({ data, handleAnswer }) {
  const [selected, setSelected] = useState("");

  const handleSubmit = () => {
    if (selected) {
      handleAnswer(selected);
      setSelected("");
    }
  };

  return (
    <div className="quiz-header">
      <h2>{data.question}</h2>
      <ul>
        {["a", "b", "c", "d"].map(key => (
          <li key={key}>
            <input
              type="radio"
              id={key}
              name="answer"
              checked={selected === key}
              onChange={() => setSelected(key)}
            />
            <label htmlFor={key}>{data[key]}</label>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Question;
