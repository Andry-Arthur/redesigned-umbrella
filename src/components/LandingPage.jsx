// LandingPage.jsx
import React, { useState, useEffect } from 'react';
import { MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';  // For custom styles
import palmGif from '../assets/palm.gif';  // Import palm tree GIF

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    "/api/placeholder/400/400",
    "/api/placeholder/400/400",
    "/api/placeholder/400/400"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-page min-vh-100">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid justify-content-end">
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">PROJECTS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resume">RESUME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-4">
      <h1 className="text-white display-3 fw-bold mb-5 ample-font">Welcome</h1>
        
        <div className="row align-items-center">
          {/* Left Column with Carousel */}
          <div className="col-md-6 position-relative">
            {/* Image Carousel */}
            <div className="circular-carousel">
              <div className="carousel-image-container">
                <img
                  src={images[currentImageIndex]}
                  alt="Profile"
                  className="img-fluid"
                />
              </div>
            </div>
            
            {/* Carousel Indicators */}
                  <div className="carousel-indicators d-flex justify-content-center mt-3">
                    {images.map((_, index) => (
                    <button
                      key={index}
                      className={`carousel-indicator ${currentImageIndex === index ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                    ))}
                  </div>
                  </div>

                  {/* Right Column Content */}
                  <div className="col-md-6 text-white text-end text-md-end">
                  <h2 className="display-3 fw-bold mb-3 ample-font">
                    Andry<br />Rakotonabelo
                  </h2>
                  <h3 className="h2 mb-2">Junior Software Engineer</h3>
                  <p className="h4 mb-4">
                    Computer Science & Data Science<br />
                    at Gettysburg College
                  </p>
                  
                  {/* Location Information */}
                  <div className="d-flex flex-column gap-2 align-items-end">
                    <div className="d-flex align-items-center justify-content-end">
                    <MapPin className="me-2" />
                    <span>Gettysburg, PA, USA</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-end">
                    <Globe className="me-2" />
                    <span>Antananarivo, Madagascar</span>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="palm-container">
                  <img src={palmGif} alt="Palm Tree GIF" />
                </div>
                {/* Scroll Indicator */}
        <div className="text-center mt-5">
          <div className="scroll-indicator">
            <div className="chevron"></div>
            <div className="chevron"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;