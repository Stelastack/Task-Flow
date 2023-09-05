import React from 'react';

const TaskCard = ({ task }) => (
  <div className="bg-white p-4 rounded shadow">
    <h3 className="font-bold">{task.title}</h3>
    <p>{task.description}</p>
  </div>
);

export default TaskCard;