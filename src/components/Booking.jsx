// Booking.jsx

import React, { useState } from "react";
import "./styles.css"; // Ensure your styles are correctly imported

const Booking = () => {
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle booking logic here (e.g., API call)
  };

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

      {/* Booking Form Section */}
      <section className="booking-section">
        <div className="booking-form-container">
          <form onSubmit={handleSubmit}>
            <h2>Schedule Your Booking</h2>
            <div className="input-group">
              <label htmlFor="full-name">FULL NAME:</label>
              <input
                type="text"
                id="full-name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="contact-number">CONTACT NUMBER:</label>
              <input
                type="tel"
                id="contact-number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">EMAIL ADDRESS:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="booking-date">SCHEDULE YOUR BOOKING:</label>
              <input
                type="date"
                id="booking-date"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              SUBMIT
            </button>
          </form>
        </div>

        {isSubmitted && (
          <div className="thank-you-message">
            <h1>THANK YOU FOR BOOKING!</h1>
          </div>
        )}
      </section>

      {/* Footer Section with Social Media Icon Images */}
      <footer>
        <p>Connect with us:</p>
        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/Blue-facebook-icon-on-transparent-background-PNG.png" // Ensure correct relative path
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/free-twitter-logo-icon-2429-thumb.png" // Ensure correct relative path
              alt="Twitter"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/15707869.png" // Ensure correct relative path
              alt="Instagram"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Booking;
