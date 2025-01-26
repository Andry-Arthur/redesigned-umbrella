import React from 'react';
import '../App.css';

const Background = () => (
    <svg className="background" width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#87CEEB" />
    <circle cx="700" cy="100" r="50" fill="#FFD700" />
    <path d="M0,400 Q400,300 800,400 T1600,400" fill="#1E90FF" className="wave" />
    <path d="M0,420 Q400,320 800,420 T1600,420" fill="#1E90FF" className="wave2" />
    <path d="M0,440 Q400,340 800,440 T1600,440" fill="#1E90FF" className="wave3" />
    <g className="palm-tree">
      <rect x="370" y="300" width="20" height="100" fill="#8B4513" />
      <path d="M380,300 Q360,280 340,300 Q360,260 380,300" fill="#228B22" />
      <path d="M380,300 Q400,280 420,300 Q400,260 380,300" fill="#228B22" />
      <path d="M380,300 Q360,320 340,300 Q360,340 380,300" fill="#228B22" />
      <path d="M380,300 Q400,320 420,300 Q400,340 380,300" fill="#228B22" />
      <path d="M380,300 Q360,300 340,280 Q360,320 380,300" fill="#228B22" />
      <path d="M380,300 Q400,300 420,280 Q400,320 380,300" fill="#228B22" />
    </g>
  </svg>
  );

export default Background;