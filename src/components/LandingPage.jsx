// LandingPage.jsx
import React, { useState, useEffect } from 'react';
import { MapPin, Globe, ChevronsDown } from 'lucide-react';
import Navbar from './Navbar'; // Import the new Navbar component
import './LandingPage.css';  // For custom styles
import palmGif from '../assets/palm.gif';  // Import palm tree GIF
import andry1 from '../assets/Andry1.jpg';  // Import profile image
import andry2 from '../assets/Andry2.jpg';  // Import profile image
import andry3 from '../assets/GoChangeTheWorld.jpg';  // Import profile image

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const images = [
    andry1,
    andry2,
    andry3
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
      {/* Main Content */}
      <div className="container mt-4">
        <h1 className="text-white display-3 fw-bold mb-5 chela-one-regular" style={{ zIndex: 2 }}>Welcome</h1>
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
                      style={{ zIndex: 1 }}
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
                      style={{ zIndex: 2 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Right Column Content */}
          <div className="col-md-6 text-white text-end text-md-end" style={{ zIndex: 2 }}>
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
        <div className="palm-container text-center mt-4">
          <img src={palmGif} alt="Palm Tree GIF" className="img-fluid palm-img" style={{ zIndex: 0 }} />
        </div>
        {/* Add Chevron at the end of the Landing Page section */}
        <div className="text-center mt-4" style={{ zIndex: 2 }}>
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