"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroCarousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setFade(true);
      window.setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setFade(false);
      }, 500);
    }, 8000);

    return () => {
      window.clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="carousel-wrapper">
      <div className={`circular-carousel ${fade ? "fade-out" : "fade-in"}`}>
        <div className="carousel-image-container">
          <Image
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            fill
            priority
            sizes="(max-width: 576px) 300px, 400px"
            className="carousel-image"
          />
        </div>
      </div>

      <div className="carousel-indicators d-flex justify-content-center mt-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${currentImageIndex === index ? "active" : ""}`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Show portrait ${index + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}