import React from 'react';
import Task from './Task';

function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;