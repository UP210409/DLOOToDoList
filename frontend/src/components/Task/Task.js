// src/components/Task/Task.js

import React from 'react';
import './Task.css';

function Task({ task, onDelete, onComplete }) {
  return (
    <div className="task">
      <div className="task-header">
        <span className="delete-task" onClick={() => onDelete(task.id)}>✕</span>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onComplete(task.id)}
        />
      </div>
      <div className="task-name">
        {task.name}
      </div>
    </div>
  );
}

export default Task;
