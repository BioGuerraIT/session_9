import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { tasks } from '../data/Tasks';
import TaskColumn from '../components/TaskColumn';
import './styles.css';

const HomePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const stages = ['todo', 'in-progress', 'review', 'done', 'archived'];

  const handleNewTaskClick = () => {
    navigate('/new-task'); // Navigate to NewTaskPage when the button is clicked
  };

  return (
    <div>
      <header>
        <h1>Kanban Board</h1>
        <button id="logoutButton">Logout</button>
        <button onClick={handleNewTaskClick}>New Task</button> {/* New Task button */}
      </header>

      <main>
        {stages.map(stage => (
          <TaskColumn
            key={stage}
            title={stage.charAt(0).toUpperCase() + stage.slice(1)}
            tasks={tasks.filter(task => task.stage === stage)}
          />
        ))}
      </main>

      <footer>
        &copy; 2024 Kanban Board
      </footer>
    </div>
  );
};

export default HomePage;
