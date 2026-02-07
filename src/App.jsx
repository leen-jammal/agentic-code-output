import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from local storage on initial load
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Save tasks to local storage whenever tasks change
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;