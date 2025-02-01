// LandingPage.jsx
import React, { useState, useEffect } from 'react';
import { MapPin, Globe, ChevronsDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import './LandingPage.css';  // For custom styles
import palmGif from '../assets/palm.gif';  // Import palm tree GIF
import andry1 from '../assets/Andry1.jpg';  // Import profile image
import andry2 from '../assets/Andry2.jpg';  // Import profile image

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const images = [
    andry1,
    andry2,
    "/api/placeholder/400/400"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setFade(false);
      }, 500); // Duration of the fade-out animation
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleProjectsClick = () => {
      const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                <Link className="nav-link" to="/redesigned-umbrella">HOME</Link>
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
      <h1 className="text-white display-3 fw-bold mb-5 chela-one-regular">Welcome</h1>
        
        <div className="row align-items-center">
          {/* Left Column with Carousel */}
          <div className="col-md-6 position-relative">
            <div className="d-flex flex-column align-items-center">
              {/* Carousel Wrapper */}
              <div className="carousel-wrapper">
                {/* Image Carousel */}
                <div className={`circular-carousel ${fade ? 'fade-out' : 'fade-in'}`}>
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
            </div>
          </div>

          {/* Right Column Content */}
                <div className="col-md-6 text-white text-end text-md-end">
                <h2 className="display-2 fw-bold mb-3 chela-one-regular">
                  Andry A.<br />Rakotonjanabelo
                </h2>
                <h3 className="h1 mb-2">Junior Software Engineer</h3>
                <p className="h3 mb-4">
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
        {/* Add Chevron at the end of the Landing Page section */}
        <div className="text-center mt-4">
          <button
            className="chevron-btn btn btn-link"
            onClick={handleProjectsClick}
            style={{ fontSize: '2rem', textDecoration: 'none' }}
          >
            <ChevronsDown color="white" size={48} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;