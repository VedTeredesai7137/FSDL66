import React from 'react';

function Task({ task, deleteTask }) {
  return (
    <div>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default Task;
