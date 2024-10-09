import React, { useEffect, useState } from "react";
import "./Home.css"; // Assuming the CSS is in a separate file called Home.css

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    { src: "images/ovation+1.jpg", text: "TOP ONE VENUE" },
    { src: "images/oha.jpg", text: "TOP TWO VENUE" },
    { src: "images/tata.jfif", text: "TOP THREE VENUE" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const plusSlides = (n) => {
    setSlideIndex(
      (prevIndex) => (prevIndex + n + slides.length) % slides.length
    );
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
              <a href="#">About Us</a>
            </li>
          </ul>
        </nav>
      </header>

      <br />
      <br />
      <br />
      <br />

      {/* Main Content Section with Carousel and Text */}
      <section className="main-content">
        {/* Carousel Section */}
        <div className="slideshow-container">
          {slides.map((slide, index) => (
            <div
              className={`mySlides fade ${
                index === slideIndex ? "active" : ""
              }`}
              key={index}
            >
              <div className="numbertext">
                {index + 1} / {slides.length}
              </div>
              <img src={slide.src} style={{ width: "100%" }} alt={slide.text} />
              <div className="text">{slide.text}</div>
            </div>
          ))}
          <a className="prev" onClick={() => plusSlides(-1)}>
            ❮
          </a>
          <a className="next" onClick={() => plusSlides(1)}>
            ❯
          </a>
        </div>

        {/* Text Section */}
        <div className="content">
          <h2>
            Turn Your Event <br /> Dreams into Reality
          </h2>
          <a href="booking.php" className="book-btn">
            Book Now!
          </a>
        </div>
      </section>

      <div style={{ textAlign: "center" }}>
        {slides.map((_, index) => (
          <span
            className="dot"
            key={index}
            onClick={() => setSlideIndex(index)}
          ></span>
        ))}
      </div>

      <section className="align-section">
        {/* Discover Section */}
        <div className="discover">
          <p>
            Discover Exciting offers and <br /> Unforgettable Experiences with
            us
          </p>
          <button className="view-more-btn">View More</button>
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

export default Home;
