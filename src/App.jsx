import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/tasks');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTasks(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleTaskCreate = async (newTask) => {
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const createdTask = await response.json();
      setTasks([...tasks, createdTask]);
    } catch (error) {
      console.error('Error creating task:', error);
      setError(error); // Set error state
    }
  };


  const handleTaskUpdate = async (updatedTask) => {
    try {
      const response = await fetch(`/api/tasks/${updatedTask.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedTaskFromServer = await response.json();

      setTasks(
        tasks.map((task) =>
          task.id === updatedTaskFromServer.id ? updatedTaskFromServer : task
        )
      );
    } catch (error) {
      console.error('Error updating task:', error);
      setError(error);
    }
  };


  const handleTaskDelete = async (taskId) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
      setError(error);
    }
  };



  return (
    <div className="App">
      <h1>Task Management App</h1>
      <TaskForm onTaskCreate={handleTaskCreate} />
      {isLoading && <p>Loading tasks...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      {!isLoading && !error && (
        <TaskList
          tasks={tasks}
          onTaskUpdate={handleTaskUpdate}
          onTaskDelete={handleTaskDelete}
        />
      )}
    </div>
  );
}

export default App;