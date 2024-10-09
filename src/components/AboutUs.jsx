// src/AboutUs.jsx
import React from "react";
import "./styles.css"; // Ensure you have a styles.css file in your project

const AboutUs = () => {
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

      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <div className="content">
            <h1>ABOUT US</h1>
            <p>
              At PlanAhead, we specialize in creating unforgettable events
              tailored to your vision. Our experienced team handles everything
              from venue selection to logistics, ensuring a seamless experience
              for you and your guests. Whether it's a wedding, corporate event,
              or private party, we're here to make your event a success. Let’s
              create lasting memories together!
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
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
            aria-label="Twitter"
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
            aria-label="Instagram"
          >
            <img src="images/15707869.png" alt="Instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
