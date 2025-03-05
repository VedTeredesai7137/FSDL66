import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Filter from './components/Filter';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <Router>
      <div>
        <Header />
        <Filter setFilter={setFilter} />
        <Routes>
          <Route path="/add" element={<AddTask addTask={addTask} />} />
          <Route path="/" element={<TaskList tasks={filteredTasks} deleteTask={deleteTask} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
