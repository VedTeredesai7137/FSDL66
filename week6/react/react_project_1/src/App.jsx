import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState('All');

  // Add new expense
  const addExpense = (expense) => {
    setExpenses([...expenses, { id: Date.now(), ...expense }]);
  };

  // Delete expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // Filter expenses
  const filteredExpenses = filter === 'All'
    ? expenses
    : expenses.filter((expense) => expense.category === filter);

  // Calculate total amount
  const totalAmount = expenses.reduce((acc, curr) => acc + Number(curr.amount), 0);

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <Filter setFilter={setFilter} />
      <ExpenseList expenses={filteredExpenses} deleteExpense={deleteExpense} />
      <h2>Total Expenses: ₹{totalAmount}</h2>
    </div>
  );
};

export default App;
