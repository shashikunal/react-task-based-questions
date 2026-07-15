import React, { useState } from "react";

const FormControl = ({ type, label }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <div className="form-control">
      <input type={type} value={inputValue} onChange={handleChange} required />
      <label>
        {label.split("").map((letter, idx) => (
          <span key={idx} style={{ transitionDelay: `${idx * 50}ms` }}>
            {letter}
          </span>
        ))}
      </label>
    </div>
  );
};

const Form = () => {
  return (
    <form>
      <FormControl type="text" label="Email" />
      <FormControl type="password" label="Password" />
      <button className="btn" type="submit">
        Login
      </button>
      <p className="text">
        Don't have an account? <a href="#">Register</a>
      </p>
    </form>
  );
};

export default Form;
