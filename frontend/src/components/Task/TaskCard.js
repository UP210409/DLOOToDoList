// src/components/Task/TaskCard.js
import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import './TaskCard.css'; // Asegúrate de que el archivo CSS esté importado

const TaskCard = ({ task, onDelete, onEdit, onComplete }) => {
  return (
    <Card 
      variant="outlined" 
      className={`task-card ${task.completed ? 'completed' : ''}`} // Aplicar clase condicional
      style={{ marginBottom: '10px' }}
    >
      <CardContent>
        <Typography 
          variant="h6" 
          component="div" 
          className={task.completed ? 'completed-task' : ''}
        >
          {task.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {task.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Usuario: {task.user}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Proyecto: {task.project}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <IconButton color="primary" onClick={() => onComplete(task.id)}>
            {task.completed ? <CancelIcon /> : <CheckCircleIcon />}
          </IconButton>
          <IconButton color="secondary" onClick={() => onEdit(task.id)}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={() => onDelete(task.id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
