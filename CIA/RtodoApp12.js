import React, { useState, useEffect } from 'react';

function TodoApp() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Todo List</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a new task"
        style={{ padding: '10px', marginBottom: '10px' }}
      />
      <button onClick={handleAddTodo} style={{ padding: '10px' }}>Add Todo</button>
      <ul style={{ marginTop: '20px' }}>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDeleteTodo(index)} style={{ marginLeft: '10px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
