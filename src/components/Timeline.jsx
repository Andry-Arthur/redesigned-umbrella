import React from 'react';
import './Timeline.css';

const Timeline = () => {
  return (
    <div className="timeline-section min-vh-100" id="timeline">
      <div className="container py-5">
        <h1 className="projects-title text-center mb-5">My Journey</h1>
        
        <div className="timeline-container">
          <iframe 
            src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2:2PACX-1vQ3Nfu30je_k7iZeS_XvjxURi_B3WbVnWtdRDZFMUDTUGJEuifeQrjPUXt93xvJ7XdN6HDz7_DW394K&font=Default&lang=en&initial_zoom=2&height=650" 
            width="100%" 
            height="650" 
            title="My Timeline Journey"
            allowFullScreen 
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;