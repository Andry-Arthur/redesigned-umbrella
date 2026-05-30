"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

export default function TimelinePlayer({ src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return undefined;
    }

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = () => setAudioError(true);
    const handleLoadedMetadata = () => setHasStarted(Boolean(audio.currentTime));

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("error", handleError);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
      return;
    }

    setAudioError(false);
    setHasStarted(true);
    audioRef.current.play().catch(() => {
      setAudioError(true);
    });
  };

  const toggleMute = () => {
    if (!audioRef.current) {
      return;
    }

    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(audioRef.current.muted);
  };

  return (
    <div className="audio-player-container">
      <div className="audio-track-info">
        <div className="music-title">Silver Gold</div>
        <div className="music-artist">LODE</div>
      </div>

      <div className="audio-controls">
        <button className="audio-btn" onClick={togglePlay} aria-label={isPlaying ? "Pause music" : "Play music"} type="button">
          {isPlaying ? <Pause size={24} strokeWidth={2} /> : <Play size={24} strokeWidth={2} />}
        </button>

        <button className="audio-btn" onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"} type="button" disabled={!isPlaying && !hasStarted}>
          {isMuted ? <VolumeX size={24} strokeWidth={2} /> : <Volume2 size={24} strokeWidth={2} />}
        </button>

        <div className="audio-status">{audioError ? "Audio error" : isPlaying ? "Playing" : "Paused"}</div>
      </div>

      <audio ref={audioRef} src={src} loop preload="auto" />
    </div>
  );
}