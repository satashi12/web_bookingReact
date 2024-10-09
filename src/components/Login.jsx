import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you are using React Router for navigation
import "./login.css"; // Adjust the path if your CSS file is located elsewhere

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // For navigation after login

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Send POST request to the backend
    const response = await fetch("http://your-backend-url/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        email,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.admin) {
        // Admin login success
        sessionStorage.setItem("admin", data.admin); // Store admin ID in session storage
        navigate("/admin_dashboard");
      } else if (data.user) {
        // User login success
        sessionStorage.setItem("user", data.user); // Store user ID in session storage
        navigate("/");
      } else {
        setError("Invalid login credentials.");
      }
    } else {
      setError("Invalid login credentials.");
    }
  };

  return (
    <div className="sign-in-container">
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">EMAIL :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">PASSWORD :</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="sign-in-btn">
          Sign In
        </button>
        {error && <p className="error-message">{error}</p>}
        <div className="signup-link">
          <a href="/register">Sign Up</a>
          <br />
          <a href="/forgot_password">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
