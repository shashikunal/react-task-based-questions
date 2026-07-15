import React, { useRef } from "react";
import "./VerifyAccount.css";

const VerifyAccount = () => {
  const inputRefs = useRef([]);

  const handleKeyDown = (e, idx) => {
    if (e.key >= 0 && e.key <= 9) {
      inputRefs.current[idx].value = "";
      if (idx < inputRefs.current.length - 1) {
        setTimeout(() => inputRefs.current[idx + 1].focus(), 10);
      }
    } else if (e.key === "Backspace") {
      if (idx > 0) {
        setTimeout(() => inputRefs.current[idx - 1].focus(), 10);
      }
    }
  };

  return (
    <div className="container">
      <h2>Verify Your Account</h2>
      <p>
        We emailed you the six-digit code to <strong>cool_guy@email.com</strong>
        . <br /> Enter the code below to confirm your email address.
      </p>
      <div className="code-container">
        {Array.from({ length: 6 }).map((_, idx) => (
          <input
            key={idx}
            type="number"
            className="code"
            placeholder="0"
            min="0"
            max="9"
            required
            ref={(el) => (inputRefs.current[idx] = el)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
          />
        ))}
      </div>
      <small className="info">
        This is design only. We didn't actually send you an email as we don't
        have your email, right?
      </small>
    </div>
  );
};

export default VerifyAccount;
