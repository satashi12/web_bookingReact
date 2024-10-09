// ForgotPassword.jsx
import React, { useState } from "react";
import "./ForgotPassword.css"; // Import your CSS file

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://yourdomain.com/forgot_password.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.text(); // Assuming PHP returns plain text
      setMessage(data);
    } catch (error) {
      console.error("Error:", error);
      setMessage("There was an error processing your request.");
    }
  };

  return (
    <div className="container">
      <h2>Forgot Password</h2>
      <div className="sign-in-container">
        <h3>Sign In</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Enter your email address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Reset Link</button>
          {message && <p className="message">{message}</p>}
          <a href="/user_login" className="fcc-btn">
            Back to Login
          </a>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
