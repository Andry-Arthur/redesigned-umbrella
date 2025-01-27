import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Sample images array - replace with your actual images
  const images = [
    "/api/placeholder/400/400",
    "/api/placeholder/400/400",
    "/api/placeholder/400/400"
  ];

  // Carousel automation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-sky-300">
      {/* Navigation Bar */}
      <nav className="p-4">
        <ul className="flex justify-end space-x-8 text-white">
          <li className="cursor-pointer hover:text-sky-100">HOME</li>
          <li className="cursor-pointer hover:text-sky-100">PROJECTS</li>
          <li className="cursor-pointer hover:text-sky-100">RESUME</li>
          <li className="cursor-pointer hover:text-sky-100">CONTACT</li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-8">
        <h1 className="text-white text-4xl font-bold mb-12">Welcome</h1>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left side with carousel */}
          <div className="relative">
            {/* Island and Palm Tree */}
            <div className="absolute bottom-0 left-0 z-0">
              <div className="relative">
                <div className="w-32 h-16 bg-yellow-200 rounded-full absolute bottom-0"></div>
                <div className="w-8 h-24 bg-green-800 absolute bottom-16 left-8"></div>
                <div className="w-16 h-12 bg-green-600 rounded-full absolute bottom-32 left-4"></div>
              </div>
            </div>
            
            {/* Circular Image Carousel */}
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white relative z-10">
              <div className="w-full h-full relative">
                <img
                  src={images[currentImageIndex]}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-4 gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Right side content */}
          <div className="text-white text-center md:text-left">
            <h2 className="text-5xl font-bold mb-4">Andry<br />Rakotonabelo</h2>
            <h3 className="text-2xl mb-2">Junior Software Engineer</h3>
            <p className="text-xl mb-4">Computer Science & Data Science<br />at Gettysburg College</p>
            
            {/* Location Information */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-5 h-5" />
                <span>Gettysburg, PA, USA</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-5 h-5" />
                <span>Antananarivo, Madagascar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <div className="animate-bounce">
            <div className="w-8 h-8 border-b-2 border-r-2 border-white rotate-45"></div>
            <div className="w-8 h-8 border-b-2 border-r-2 border-white rotate-45 -mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;