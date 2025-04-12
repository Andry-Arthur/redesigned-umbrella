import React, { useState, useRef, useEffect } from 'react';
// Import icons explicitly to ensure they load correctly
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import './Timeline.css';
import backgroundMusic from '../assets/music/Silver-Gold-LODE.mp3';

const Timeline = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef(null);
  
  // Initialize audio element properly
  useEffect(() => {
    if (audioRef.current) {
      // Add event listeners for better state management
      audioRef.current.addEventListener('play', () => setIsPlaying(true));
      audioRef.current.addEventListener('pause', () => setIsPlaying(false));
      audioRef.current.addEventListener('error', () => setAudioError(true));
    }
    
    // Clean up
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('play', () => setIsPlaying(true));
        audioRef.current.removeEventListener('pause', () => setIsPlaying(false));
        audioRef.current.removeEventListener('error', () => setAudioError(true));
      }
    };
  }, []);

  // Toggle play/pause - clean implementation
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Reset error state on play attempt
        setAudioError(false);
        
        audioRef.current.play()
          .catch(error => {
            console.error("Audio playback error:", error);
            setAudioError(true);
          });
      }
    }
  };

  // Toggle mute
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="timeline-section min-vh-100" id="timeline">
      <div className="container py-5">
        <h1 className="projects-title text-center mb-5">My Journey</h1>
        
        {/* Enhanced audio player container */}
        <div className="audio-player-container">
          <div className="audio-track-info">
            <div className="music-title">Silver Gold</div>
            <div className="music-artist">LODE</div>
          </div>
          
          <div className="audio-controls">
            <button 
              className="audio-btn" 
              onClick={togglePlay} 
              aria-label={isPlaying ? 'Pause music' : 'Play music'}
            >
              {isPlaying ? <Pause size={24} strokeWidth={2} /> : <Play size={24} strokeWidth={2} />}
            </button>
            
            <button 
              className="audio-btn" 
              onClick={toggleMute} 
              aria-label={isMuted ? 'Unmute' : 'Mute'}
              disabled={!isPlaying && !audioRef.current?.currentTime}
            >
              {isMuted ? <VolumeX size={24} strokeWidth={2} /> : <Volume2 size={24} strokeWidth={2} />}
            </button>
            
            <div className="audio-status">
              {audioError ? 'Audio error' : isPlaying ? 'Playing' : 'Paused'}
            </div>
          </div>
          
          {/* Audio element */}
          <audio 
            ref={audioRef} 
            src={backgroundMusic} 
            loop 
            preload="auto"
          />
        </div>

        {/* Music suggestion text */}
        <div className="music-suggestion text-center mb-4">
          <em>💡 Enhance your journey through time with some background music</em>
        </div>
        
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