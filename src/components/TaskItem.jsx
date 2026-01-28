import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTask } from '../redux/taskSlice';
import './TaskItem.css';

function TaskItem({ task }) {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: task.id }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTask({ id: task.id }));
  };

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCompleteClick}
      />
      <span className={task.completed ? 'task-title completed' : 'task-title'}>
        {task.title}
      </span>
      <button onClick={handleDeleteClick} className="delete-button">
        Delete
      </button>
    </div>
  );
}

export default TaskItem;