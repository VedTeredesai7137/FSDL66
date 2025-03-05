import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Filter from './components/Filter';

function App() {
  // Initial tasks state
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Buy Groceries' },
    { id: 2, title: 'Complete Homework' },
    { id: 3, title: 'Walk the Dog' },
  ]);
  
  const [filter, setFilter] = useState('');

  // Add new task function
  const addTask = (taskTitle) => {
    const newTask = {
      id: tasks.length + 1,
      title: taskTitle,
    };
    setTasks([...tasks, newTask]);
  };

  // Filter tasks function
  const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <Header />
      <Filter filter={filter} setFilter={setFilter} />
      <AddTask addTask={addTask} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
