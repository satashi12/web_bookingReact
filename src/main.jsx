// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes"; // Import the routes component

const main = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default main;
