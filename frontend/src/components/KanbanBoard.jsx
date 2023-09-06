import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

const KanbanBoard = () => {
  const columns = ['todo', 'in-progress', 'done'];
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'First task', status: 'todo' },
    { id: 2, title: 'Task 2', description: 'Second task', status: 'in-progress' },
  ]);

  const tasksByStatus = columns.reduce((acc, status) => {
    acc[status] = tasks.filter(t => t.status === status);
    return acc;
  }, {});

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const task = tasks.find(t => t.id.toString() === result.draggableId);
      setTasks(tasks.map(t => t.id === task.id ? { ...t, status: destination.droppableId } : t));
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex space-x-4 p-4">
        {columns.map(column => (
          <Droppable key={column} droppableId={column}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-1/3 bg-gray-200 p-4 rounded"
              >
                <h2 className="text-lg font-bold mb-4 capitalize">{column.replace('-', ' ')}</h2>
                <div className="space-y-2">
                  {tasksByStatus[column].map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TaskCard task={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;