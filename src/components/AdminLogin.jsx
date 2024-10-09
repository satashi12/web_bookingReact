// src/AdminLogin.jsx
import React, { useState } from "react";
import "./styles.css"; // Import your CSS file

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://your-api-url/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      // Redirect to dashboard or handle successful login
      window.location.href = "/admin_dashboard";
    } else {
      const errorData = await response.json();
      setError(errorData.message || "Invalid username or password.");
    }
  };

  return (
    <div className="main-content">
      <div className="sign-in-container">
        <h3>Admin Sign In</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
