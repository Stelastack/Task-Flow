import React from 'react';

const TaskCard = ({ task, onClick }) => (
  <div onClick={onClick} className="bg-white p-4 rounded shadow cursor-pointer">
    <h3 className="font-bold">{task.title}</h3>
    <p>{task.description}</p>
  </div>
);

export default TaskCard;