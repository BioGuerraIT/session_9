import React from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import

const NewTaskPage = () => {
  const navigate = useNavigate(); // Updated hook

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would normally handle form submission, e.g., updating state or sending to a server.
    console.log("Form submitted!");
    navigate('/'); // Updated method to redirect to home page after form submission
  };

  return (
    <div>
      <h1>New Task</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" required></textarea>
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default NewTaskPage;
