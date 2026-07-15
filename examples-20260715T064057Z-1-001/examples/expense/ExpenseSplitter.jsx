import React, { useState } from "react";
import "./Expense.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [person, setPerson] = useState("");
  const [amount, setAmount] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState("");

  const addExpense = () => {
    if (!person || !amount || isNaN(amount) || amount <= 0) {
      setError("Please enter valid person and amount.");
      return;
    }
    setError("");
    setExpenses([...expenses, { person, amount: parseFloat(amount) }]);
    setPerson("");
    setAmount("");
  };

  const calculateSummary = () => {
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    const uniquePeople = [...new Set(expenses.map(exp => exp.person))];
    const sharePerPerson = total / uniquePeople.length;

    const balances = uniquePeople.map(name => {
      const spent = expenses
        .filter(exp => exp.person === name)
        .reduce((sum, exp) => sum + exp.amount, 0);
      return { name, balance: spent - sharePerPerson };
    });

    return balances;
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <header>
        <h1>Expense Splitter</h1>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞" : "🌙"}
        </button>
      </header>
      <div className="input-section">
        <input
          type="text"
          placeholder="Person Name"
          value={person}
          onChange={e => setPerson(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <button onClick={addExpense}>Add Expense</button>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="expense-list">
        <h2>Expenses</h2>
        {expenses.length > 0 ? (
          expenses.map((exp, index) => (
            <div className="expense-item fade-in" key={index}>
              <strong>{exp.person}</strong> spent ₹{exp.amount.toFixed(2)}
            </div>
          ))
        ) : (
          <p className="placeholder">No expenses added yet.</p>
        )}
      </div>
      <div className="summary">
        <h2>Summary</h2>
        {expenses.length > 0 ? (
          calculateSummary().map((summary, index) => (
            <div className="summary-item slide-up" key={index}>
              <strong>{summary.name}</strong>{" "}
              {summary.balance > 0
                ? `is owed ₹${summary.balance.toFixed(2)}`
                : `owes ₹${Math.abs(summary.balance).toFixed(2)}`}
            </div>
          ))
        ) : (
          <p className="placeholder">No summary available.</p>
        )}
      </div>
    </div>
  );
};

export default App;
