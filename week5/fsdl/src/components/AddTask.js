import React, { useState } from 'react';

function AddTask({ addTask, history }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName) {
      alert('Task name is required!');
      return;
    }

    const newTask = {
      id: Math.floor(Math.random() * 1000),
      name: taskName,
      description: taskDescription,
    };

    addTask(newTask);
    setTaskName('');
    setTaskDescription('');
    history.push('/');
  };

  return (
    <div>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task Name</label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Task Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
