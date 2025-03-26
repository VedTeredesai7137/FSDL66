const ExpenseList = ({ expenses, deleteExpense }) => {
    if (expenses.length === 0) return <p>No expenses added yet!</p>;
  
    return (
      <ul className="expense-list">
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span style={{ color: 'black' }}>{expense.title} - ₹{expense.amount} ({expense.category})</span>
            <button onClick={() => deleteExpense(expense.id)}>❌</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default ExpenseList;
  