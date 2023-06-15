import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/signup";
import Login from "./components/login";
import ToDoList from "./components/todolist";

function App() {
  return (
    <Routes>
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/todos" exact element={<ToDoList />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
