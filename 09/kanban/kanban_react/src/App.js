import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewTaskPage from "./pages/NewTaskPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<HomePage />} />
        <Route path="/new-task" element={<NewTaskPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
