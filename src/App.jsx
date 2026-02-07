import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true); // Set loading to true when fetching starts
    setError(null); // Clear any previous errors
    try {
      const response = await fetch('http://localhost:3001/tasks');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTasks(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false); // Set loading to false when fetching finishes
    }
  };

  const addTask = async (newTask) => {
    try {
      const response = await fetch('http://localhost:3001/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const addedTask = await response.json();
      setTasks([...tasks, addedTask]);
    } catch (error) {
      console.error('Error adding task:', error);
      setError(error.message);
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      const response = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updated = await response.json();

      setTasks(tasks.map(task => (task.id === id ? updated : task)));
    } catch (error) {
      console.error('Error updating task:', error);
      setError(error.message);
    }
  };


  const deleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
      setError(error.message);
    }
  };


  return (
    <div className="App">
      <h1>Task Management App</h1>

      <TaskForm onAddTask={addTask} />

      {loading && <p>Loading tasks...</p>} {/* Display loading message */}
      {error && <p>Error: {error}</p>}       {/* Display error message */}

      {!loading && !error && (
        <TaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onUpdateTask={updateTask}
        />
      )}
    </div>
  );
}

export default App;