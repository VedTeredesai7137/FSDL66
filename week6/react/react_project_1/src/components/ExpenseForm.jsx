import { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return alert('Please enter all fields!');
    addExpense({ title, amount: parseFloat(amount), category });
    setTitle('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount (₹)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
