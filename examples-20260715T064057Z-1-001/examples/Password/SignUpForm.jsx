import React, { useState } from "react";
import "./SignUpForm.css";

const passwordRequirements = [
  { text: "At least 8 characters", check: pw => pw.length >= 8 },
  { text: "Contains an uppercase letter", check: pw => /[A-Z]/.test(pw) },
  { text: "Contains a lowercase letter", check: pw => /[a-z]/.test(pw) },
  { text: "Contains a number", check: pw => /\d/.test(pw) },
  { text: "Contains a special character", check: pw => /[!@#$%^&*]/.test(pw) },
];

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const strength = passwordRequirements.filter(req =>
    req.check(password)
  ).length;
  const isPasswordValid = strength === passwordRequirements.length;
  const isPasswordMatching = password === confirmPassword;

  const isFormValid = name && email && isPasswordValid && isPasswordMatching;

  return (
    <div className="signup-container">
      <h1>Create Your Account</h1>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(prev => !prev)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="strength-bar">
            <div
              className="strength-fill"
              style={{
                width: `${(strength / 5) * 100}%`,
                backgroundColor:
                  strength < 3
                    ? "#e74c3c"
                    : strength < 5
                    ? "#f1c40f"
                    : "#2ecc71",
              }}
            ></div>
          </div>
          <ul className="requirements">
            {passwordRequirements.map((req, index) => (
              <li
                key={index}
                className={`requirement-item ${
                  req.check(password) ? "fulfilled" : ""
                }`}
              >
                <span
                  className={`checkmark ${
                    req.check(password) ? "fulfilled" : ""
                  }`}
                ></span>
                {req.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder="Re-enter your password"
          />
          {!isPasswordMatching && confirmPassword && (
            <p className="error-text">Passwords do not match!</p>
          )}
        </div>

        <button type="submit" disabled={!isFormValid}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
