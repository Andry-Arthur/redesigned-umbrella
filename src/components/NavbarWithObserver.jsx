import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';

const NavbarWithObserver = () => {
  const [isVisible, setIsVisible] = useState(true);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide the Navbar when the sentinel is intersecting
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }
    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Sentinel element that triggers the observer */}
      <div 
        ref={sentinelRef} 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px'
        }}
      />
      {isVisible && <Navbar />}
    </>
  );
};

export default NavbarWithObserver;