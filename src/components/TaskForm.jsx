import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTask({
        id: Date.now(),
        text: text,
        completed: false,
      });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Add a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;