import React from "react";
import "./Services.css"; // Import your CSS file here

const Services = () => {
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
              <a href="home.php">Home</a>
            </li>
            <li>
              <a href="user_login.php">User Login</a>
            </li>
            <li>
              <a href="admin_login.php">Admin Login</a>
            </li>
            <li>
              <a href="services.php">Services</a>
            </li>
            <li>
              <a href="booking.php">Book</a>
            </li>
            <li>
              <a href="aboutus.php">About Us</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <section className="main-content">
        <h2>WHAT WE OFFER</h2>
        <div className="service-grid">
          <div data-title="CATERING">
            <img src="images/catering.PNG" alt="Catering" />
          </div>
          <div data-title="PHOTOGRAPHER VIDEOGRAPHER">
            <img src="images/photo.jpg" alt="Photographer" />
          </div>
          <div data-title="RENTALS">
            <img src="images/chair.jpg" alt="Rentals" />
          </div>
          <div data-title="WHOLE EVENT PACKAGE">
            <img src="images/bar.jpg" alt="Whole Event Package" />
          </div>
          <div data-title="ENTERTAINMENT">
            <img src="images/enter.jpg" alt="Entertainment" />
          </div>
          <div data-title="EVENT PLANNER">
            <img src="images/planner.jpg" alt="Event Planner" />
          </div>
        </div>
      </section>

      {/* Footer Section with Social Media Icons */}
      <footer>
        <p>FOLLOW US ON OUR SOCIAL MEDIA ACCOUNTS</p>
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

export default Services;
