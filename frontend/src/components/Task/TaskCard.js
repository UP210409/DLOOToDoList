// src/components/Task/TaskCard.js
import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const TaskCard = ({ task, onDelete, onComplete }) => {
  return (
    <Card variant="outlined" style={{ marginBottom: '10px' }}>
      <CardContent>
        <Typography variant="h6" component="div">
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
            <CheckCircleIcon />
          </IconButton>
          <IconButton color="secondary" onClick={() => onDelete(task.id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
