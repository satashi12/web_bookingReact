import React, { useState } from "react";
import axios from "axios";
import "./UserLogin.css"; // Import your CSS styles here

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://your-api-endpoint/login.php", {
        username,
        password,
      });

      if (response.data.success) {
        // Redirect to the user dashboard or handle success
        window.location.href = "/user_dashboard";
      } else {
        setErrorMessage("Invalid username or password.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while logging in.");
    }
  };

  return (
    <div className="login-container">
      <header>
        <div className="logo">
          <h1>PlanAhead</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/user_login">User Login</a>
            </li>
            <li>
              <a href="/admin_login">Admin Login</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/booking">Book</a>
            </li>
            <li>
              <a href="/aboutus">About Us</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="main-content">
        <div className="image-grid">
          <img src="/images/catering.PNG" alt="Event Setup" />
          <img src="/images/kasal.PNG" alt="Wedding Event" />
          <img src="/images/wine.PNG" alt="Catering Service" />
        </div>

        <div className="content">
          <h2>
            Turn Your Event
            <br />
            Dreams into Reality
          </h2>
          <button className="book-btn">Book Now!</button>
        </div>

        <div className="sign-in-container">
          <h3>Sign In</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">User Name:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
            <a href="/user_register">Sign Up</a> |
            <a href="/forgot_password">Forgot Password?</a>
          </form>
          {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
      </section>

      <section className="discover">
        <p>
          Discover Exciting offers and <br /> Unforgettable Experiences with us
        </p>
        <button className="view-more-btn">View More</button>
      </section>

      <footer>
        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/Blue-facebook-icon-on-transparent-background-PNG.png"
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/free-twitter-logo-icon-2429-thumb.png"
              alt="Twitter"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/15707869.png" alt="Instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default UserLogin;
