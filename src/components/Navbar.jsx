import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Navbar.css'; // Import custom styles

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // Add function to scroll to timeline section
  const scrollToTimeline = (event) => {
    event.preventDefault();
    const timelineSection = document.getElementById("timeline");
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: "smooth" });
      setIsExpanded(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${isExpanded ? 'show-background' : ''}`}>
      <div className="container-fluid justify-content-end">
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
          onClick={handleToggle}
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
              <a className="nav-link" href="#timeline" onClick={scrollToTimeline}>TIMELINE</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;