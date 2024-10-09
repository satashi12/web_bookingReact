import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you are using React Router for navigation

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // For navigation after reset

  // Get the token from the URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      setResetToken(token);
    } else {
      setError("Invalid request.");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Send POST request to the backend
    const response = await fetch("http://your-backend-url/reset_password.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        reset_token: resetToken,
        new_password: newPassword,
      }),
    });

    if (response.ok) {
      const data = await response.text(); // Assuming a plain text response
      setSuccess(data);
    } else {
      setError(
        "Failed to reset password. The reset link may be invalid or expired."
      );
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="reset_token" value={resetToken} />
        <label htmlFor="new_password">New Password:</label>
        <input
          type="password"
          id="new_password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}
        <a href="/login">Back to Login</a>
      </form>
    </div>
  );
};

export default ResetPassword;
