import React from 'react';
import Task from './Task';

function TaskList({ tasks, deleteTask }) {
  return (
    <div>
      <h2>Your Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks available!</p>
      ) : (
        tasks.map((task) => (
          <Task key={task.id} task={task} deleteTask={deleteTask} />
        ))
      )}
    </div>
  );
}

export default TaskList;
