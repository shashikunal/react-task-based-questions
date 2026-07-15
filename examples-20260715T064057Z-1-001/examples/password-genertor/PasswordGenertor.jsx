import React, { useState } from 'react';
import './PasswordGenertor.css';

const PasswordGenertor = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(20);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
  };

  const generatePassword = () => {
    const typesCount = includeLower + includeUpper + includeNumbers + includeSymbols;
    const typesArr = [
      { lower: includeLower },
      { upper: includeUpper },
      { number: includeNumbers },
      { symbol: includeSymbols },
    ].filter((item) => Object.values(item)[0]);

    if (typesCount === 0) {
      setPassword('');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach((type) => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
      });
    }

    setPassword(generatedPassword.slice(0, length));
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      alert('Password copied to clipboard!');
    }
  };

  return (
    <div className="container">
      <h2>Password Generator</h2>
      <div className="result-container">
        <span id="result">{password}</span>
        <button className="btn" onClick={copyToClipboard}>
          <i className="far fa-clipboard"></i>
        </button>
      </div>
      <div className="settings">
        <div className="setting">
          <label>Password Length</label>
          <input
            type="number"
            id="length"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(+e.target.value)}
          />
        </div>
        <div className="setting">
          <label>Include uppercase letters</label>
          <input
            type="checkbox"
            id="uppercase"
            checked={includeUpper}
            onChange={(e) => setIncludeUpper(e.target.checked)}
          />
        </div>
        <div className="setting">
          <label>Include lowercase letters</label>
          <input
            type="checkbox"
            id="lowercase"
            checked={includeLower}
            onChange={(e) => setIncludeLower(e.target.checked)}
          />
        </div>
        <div className="setting">
          <label>Include numbers</label>
          <input
            type="checkbox"
            id="numbers"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
        </div>
        <div className="setting">
          <label>Include symbols</label>
          <input
            type="checkbox"
            id="symbols"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
        </div>
      </div>
      <button className="btn btn-large" onClick={generatePassword}>
        Generate Password
      </button>
    </div>
  );
};

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

export default PasswordGenertor;
