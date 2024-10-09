// src/EditUser.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Check if admin is logged in, redirect if not
    const isAdmin = sessionStorage.getItem("admin"); // Adjust this based on how you manage sessions
    if (!isAdmin) {
      navigate("/admin_login");
    }

    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users/${id}`); // Adjust the API endpoint as needed
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user:", error);
        // Handle error (e.g., redirect to error page or show a message)
      }
    };

    fetchUser();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/users/${id}`, user); // Adjust the API endpoint as needed
      navigate("/admin_dashboard"); // Redirect to the admin dashboard
    } catch (error) {
      console.error("Error updating user:", error);
      // Handle error (e.g., show an error message)
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#FF7F00",
        color: "#FFFFFF",
        padding: "20px",
      }}
    >
      <header
        style={{
          backgroundColor: "#FF6200",
          padding: "20px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{ fontSize: "24px", fontWeight: "bold", paddingLeft: "20px" }}
        >
          PlanAhead Admin
        </div>
        <nav>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            <li style={{ margin: "0 15px" }}>
              <a
                href="/admin_dashboard"
                style={{
                  textDecoration: "none",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                }}
              >
                Dashboard
              </a>
            </li>
            <li style={{ margin: "0 15px" }}>
              <a
                href="/user_login"
                style={{
                  textDecoration: "none",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                }}
              >
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <h2>Welcome, Admin</h2>
      <h3>User Management</h3>
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          margin: "20px auto",
          width: "80%",
        }}
      >
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              border: "1px solid #ccc",
            }}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              border: "1px solid #ccc",
            }}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              border: "1px solid #ccc",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
