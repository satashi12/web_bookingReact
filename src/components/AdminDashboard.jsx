// src/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin_dashboard.css"; // Ensure you have a CSS file for styling

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the server
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users"); // Adjust the endpoint to your API
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleLogout = () => {
    // Implement logout logic here (e.g., clear session, redirect)
    // For example, remove any auth tokens or session storage
    window.location.href = "/user_login"; // Adjust as necessary
  };

  return (
    <div>
      {/* Header Section */}
      <header>
        <div className="logo">PlanAhead Admin</div>
        <nav>
          <ul>
            <li>
              <a href="/admin_dashboard">Dashboard</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <h2>Welcome, Admin</h2>
      <h3>User Management</h3>

      {/* User Table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td className="actions">
                  <a href={`/edit_user/${user.id}`} className="edit">
                    Edit
                  </a>
                  <a href={`/delete_user/${user.id}`} className="delete">
                    Delete
                  </a>
                  <a href={`/view_user/${user.id}`} className="view">
                    View
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
