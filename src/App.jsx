import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data from an API
    setTimeout(() => {
      setTasks([
        { id: 1, title: 'Learn React', completed: false },
        { id: 2, title: 'Build a To-Do App', completed: true },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const addTask = (title) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTaskForm addTask={addTask} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TaskList
          tasks={tasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      )}
    </div>
  );
}

export default App;