import React from "react";
import "./home.css"; // Assuming your CSS file is in the same directory

const Index = () => {
  return (
    <div>
      {/* Header Section */}
      <header>
        <div className="logo">
          <h1>PlanAhead</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/login">Sign in</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/booking">Book</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </nav>
        <div className="search-user">
          <input type="text" placeholder="Search" />
          <i className="fas fa-search"></i>
          <i className="fas fa-user"></i>
        </div>
      </header>

      <br />
      <br />
      <br />
      <br />

      {/* Main Content Section */}
      <section className="main-content">
        <div className="image-grid">
          <img src="images/catering.PNG" width="100%" alt="Event Setup" />
          <img src="images/kasal.PNG" alt="Wedding Event" />
          <img
            src="images/wine.PNG"
            alt="Catering Service"
            className="wine-image"
          />
        </div>

        <div className="content">
          <h2>
            Turn Your Event <br /> Dreams into Reality
          </h2>
          <button className="book-btn">Book Now!</button>
        </div>
      </section>

      <section className="align-section">
        {/* Discover Section */}
        <div className="discover">
          <p>
            Discover Exciting offers and <br /> Unforgettable Experiences with
            us
          </p>
          <button className="view-more-btn">View More</button>
        </div>

        {/* Sign-In Container */}
        <div className="sign-in-container">
          <h3>Sign In</h3>
          <form action="/login" method="POST">
            <div className="input-group">
              <label htmlFor="email">EMAIL :</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">PASSWORD :</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="sign-in-btn">
              Sign In
            </button>
            <div className="signup-link">
              <a href="/register">Sign Up</a>
              <br />
              <a href="/forgot_password">Forgot Password?</a>
            </div>
          </form>
        </div>
      </section>

      {/* Footer Section with Social Media Icon Images */}
      <footer>
        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/Blue-facebook-icon-on-transparent-background-PNG.png"
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/free-twitter-logo-icon-2429-thumb.png"
              alt="Twitter"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/15707869.png" alt="Instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
