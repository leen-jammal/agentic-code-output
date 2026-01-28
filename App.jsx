import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:3001/todos');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Could not fetch todos:", error);
    }
  };

  const addTodo = async (text) => {
    try {
      const response = await fetch('http://localhost:3001/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const newTodo = await response.json();
      setTodos([...todos, newTodo]);
      fetchTodos(); // Re-fetch todos to update the list
    } catch (error) {
      console.error("Could not add todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/todos/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      fetchTodos(); // Re-fetch todos to update the list

    } catch (error) {
      console.error("Could not delete todo:", error);
    }
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

function TodoList({ todos, deleteTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

function TodoItem({ todo, deleteTodo }) {
  return (
    <li>
      {todo.text}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default App;