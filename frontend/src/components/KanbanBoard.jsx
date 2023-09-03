import React from 'react';

const KanbanBoard = () => {
  const columns = ['todo', 'in-progress', 'done'];

  return (
    <div className="flex space-x-4 p-4">
      {columns.map(column => (
        <div key={column} className="w-1/3 bg-gray-200 p-4 rounded">
          <h2 className="text-lg font-bold mb-4 capitalize">{column.replace('-', ' ')}</h2>
          <div className="space-y-2">
            {/* Tasks will go here */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;