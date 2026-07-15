import React, { useState } from "react";
import "./PasswordStrength.css";

const PasswordStrength = () => {
  const [blurValue, setBlurValue] = useState(20);

  const handlePasswordChange = (e) => {
    const inputLength = e.target.value.length;
    setBlurValue(20 - inputLength * 2);
  };

  return (
    <div className="container">
      <div
        className="background"
        style={{ filter: `blur(${blurValue}px)` }}
      ></div>
      <div className="card">
        <h1 className="text-3xl">Image Password Strength</h1>
        <p className="text-sm text-gray-700">
          Change the password to see the effect
        </p>
        <div className="my-4 text-left">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="my-4 text-left">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default PasswordStrength;
