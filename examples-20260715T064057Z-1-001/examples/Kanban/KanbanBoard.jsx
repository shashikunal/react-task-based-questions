import React, { useState } from "react";
import "./kanbanBoard.css";

const taskData = [
  { id: 1, status: "Todo", title: "Create wireframes" },
  { id: 2, status: "In Progress", title: "Develop homepage" },
  { id: 3, status: "Review", title: "Review codebase" },
  { id: 4, status: "Done", title: "Deploy app" },
];

const statuses = ["Todo", "In Progress", "Review", "Done"];

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(taskData);
  const [draggedTask, setDraggedTask] = useState(null);

  const handleDragStart = task => {
    setDraggedTask(task);
  };

  const handleDrop = status => {
    if (draggedTask) {
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === draggedTask.id ? { ...task, status } : task
        )
      );
      setDraggedTask(null);
    }
  };

  const handleDragOver = event => {
    event.preventDefault();
  };

  return (
    <div className="kanban-board">
      {statuses.map(status => (
        <KanbanColumn
          key={status}
          status={status}
          tasks={tasks.filter(task => task.status === status)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(status)}
          onDragStart={handleDragStart}
        />
      ))}
    </div>
  );
};

const KanbanColumn = ({ status, tasks, onDragOver, onDrop, onDragStart }) => {
  return (
    <div className="kanban-column" onDragOver={onDragOver} onDrop={onDrop}>
      <h2 className="column-title">{status}</h2>
      <div className="task-list">
        {tasks.map(task => (
          <KanbanTask key={task.id} task={task} onDragStart={onDragStart} />
        ))}
      </div>
    </div>
  );
};

const KanbanTask = ({ task, onDragStart }) => {
  return (
    <div
      className="kanban-task"
      draggable
      onDragStart={() => onDragStart(task)}
    >
      {task.title}
    </div>
  );
};

export default KanbanBoard;
