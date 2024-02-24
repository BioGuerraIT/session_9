import React from 'react';

const TaskColumn = ({ title, tasks }) => {
  return (
    <section className="column">
      <h2>{title}</h2>
      {tasks.map(task => (
        <div className="task" draggable="true" key={task.id}>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
        </div>
      ))}
    </section>
  );
};

export default TaskColumn;
