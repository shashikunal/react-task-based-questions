import React, { useState } from "react";
import "./BudgetTracker.css";

const BudgetTracker = () => {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("income");
  const [filter, setFilter] = useState("all");

  const addTransaction = () => {
    if (amount && description) {
      setTransactions([
        ...transactions,
        {
          id: Date.now(),
          amount: parseFloat(amount),
          description,
          type,
        },
      ]);
      setAmount("");
      setDescription("");
    }
  };

  const filteredTransactions = transactions.filter(transaction => {
    if (filter === "all") return true;
    return transaction.type === filter;
  });

  const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const calculatePercentage = (amount, total) => {
    return total === 0 ? 0 : Math.round((amount / total) * 100);
  };

  const totalBudget = totalIncome - totalExpense;

  return (
    <div className="budget-tracker">
      <h1 className="title">Budget Tracker</h1>
      <div className="input-section">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button onClick={addTransaction}>Add Transaction</button>
      </div>

      <div className="filter-section">
        <label>Filter:</label>
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <div className="analytics-section">
        <div className="summary">
          <h3>Total Budget: ${totalBudget.toFixed(2)}</h3>
          <h3>Income: ${totalIncome.toFixed(2)}</h3>
          <h3>Expenses: ${totalExpense.toFixed(2)}</h3>
        </div>
        <div className="chart-container">
          <div className="pie-chart">
            <div
              className="pie income"
              style={{
                "--percentage": calculatePercentage(
                  totalIncome,
                  totalIncome + totalExpense
                ),
              }}
            ></div>
            <div
              className="pie expense"
              style={{
                "--percentage": calculatePercentage(
                  totalExpense,
                  totalIncome + totalExpense
                ),
              }}
            ></div>
          </div>
          {/* <div className="chart-legend">
            <span className="legend-income">Income</span>
            <span className="legend-expense">Expense</span>
          </div> */}
        </div>
      </div>

      <div className="transactions-list">
        <h3>Transactions</h3>
        <ul>
          {filteredTransactions.map(t => (
            <li key={t.id} className={t.type}>
              <span>{t.description}</span>
              <span>${t.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BudgetTracker;
