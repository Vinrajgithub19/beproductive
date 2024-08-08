import React, { useState } from "react";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");

  // Event handler for adding an expense
  const handleAddExpense = () => {
    if (amount) {
      // Add the new expense to the list
      setExpenses([...expenses, { amount }]);

      // Clear the input fields
      setAmount("");
    }
  };

  return (
    <div>
      <h2>Expense Tracker</h2>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button onClick={handleAddExpense}>Add Expense</button>

      <ExpenseList expenses={expenses} />
    </div>
  );
}

function ExpenseList({ expenses }) {
  return (
    <div>
      <h3>Expenses</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>{expense.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseTracker;
