import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Music, Disc3, Upload } from 'lucide-react';
import { ProceduralFestiveMusic } from '../utils/soundEngine';

export default function AudioPlayer({ isUnlocked }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.75);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrackName, setCurrentTrackName] = useState("আনন্দলোকে মঙ্গলালোকে • Festive Flute & Sitar Dhun");
  
  const audioRef = useRef(null);
  const synthRef = useRef(null);
  const fileInputRef = useRef(null);

  // Initialize synth fallback
  useEffect(() => {
    synthRef.current = new ProceduralFestiveMusic();
    return () => {
      if (synthRef.current) synthRef.current.stop();
    };
  }, []);

  // When unlocked from LandingGate, automatically start playback
  useEffect(() => {
    if (isUnlocked) {
      startPlayback();
    }
  }, [isUnlocked]);

  const startPlayback = () => {
    setIsPlaying(true);
    // If audio element has source, attempt play, otherwise use procedural synth
    if (audioRef.current && audioRef.current.src) {
      audioRef.current.volume = isMuted ? 0 : volume;
      audioRef.current.play().catch(() => {
        // Fallback to procedural synth if audio file not loaded
        synthRef.current?.start();
      });
    } else {
      synthRef.current?.start();
    }
  };

  const pausePlayback = () => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
    synthRef.current?.stop();
  };

  const togglePlay = () => {
    if (isPlaying) {
      pausePlayback();
    } else {
      startPlayback();
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (audioRef.current) {
      audioRef.current.volume = nextMuted ? 0 : volume;
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (isMuted && val > 0) setIsMuted(false);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file && audioRef.current) {
      const url = URL.createObjectURL(file);
      audioRef.current.src = url;
      setCurrentTrackName(file.name.replace(/\.[^/.]+$/, ""));
      synthRef.current?.stop();
      startPlayback();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 4xl:bottom-10 4xl:right-10 z-40">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        loop
        src="/audio/festive_melody.mp3"
        onError={() => {
          // Gracefully fallback to procedural synth
          if (isPlaying) {
            synthRef.current?.start();
          }
        }}
      />
      <input
        ref={fileInputRef}
        type="file"
        accept="audio/*"
        onChange={handleFileUpload}
        className="hidden"
      />

      {/* Floating Glassmorphic Audio Controller */}
      <div className="glass-panel-gold rounded-full px-4 sm:px-5 py-2.5 sm:py-3 border border-amber-400/40 shadow-ultra-card flex items-center gap-3 4xl:gap-4 backdrop-blur-xl">
        
        {/* Animated Disc / Track Icon */}
        <div className="relative flex items-center justify-center">
          <Disc3
            className={`w-6 h-6 sm:w-7 sm:h-7 4xl:w-9 4xl:h-9 text-amber-300 ${
              isPlaying ? 'animate-spin' : ''
            }`}
            style={{ animationDuration: '4s' }}
          />
          {isPlaying && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
          )}
        </div>

        {/* Track Info (Hidden on very tiny screens) */}
        <div className="hidden sm:block max-w-[150px] md:max-w-[220px] 4xl:max-w-[320px] text-left">
          <div className="text-[11px] 4xl:text-sm font-semibold text-amber-200 truncate font-bengali">
            {currentTrackName}
          </div>
          <div className="text-[9px] 4xl:text-xs text-slate-400 truncate">
            {isPlaying ? 'Playing festive music' : 'Paused'}
          </div>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="w-8 h-8 sm:w-9 sm:h-9 4xl:w-11 4xl:h-11 rounded-full bg-amber-500 hover:bg-amber-400 text-bengal-night flex items-center justify-center font-bold shadow-md transition-all active:scale-95 cursor-pointer"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 4xl:w-5 4xl:h-5 fill-current" />
          ) : (
            <Play className="w-4 h-4 4xl:w-5 4xl:h-5 fill-current ml-0.5" />
          )}
        </button>

        {/* Volume / Mute Button */}
        <button
          onClick={toggleMute}
          className="text-amber-200 hover:text-white transition-colors cursor-pointer"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 4xl:w-6 4xl:h-6" />
          ) : (
            <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 4xl:w-6 4xl:h-6" />
          )}
        </button>

        {/* Volume Slider (Medium+ screens) */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="w-14 sm:w-16 4xl:w-24 accent-amber-400 cursor-pointer hidden md:block"
          title="Adjust Volume"
        />

        {/* Upload Custom Bengali Song MP3 Option */}
        <button
          onClick={() => fileInputRef.current?.click()}
          className="text-slate-400 hover:text-amber-200 p-1 transition-colors cursor-pointer"
          title="Play your custom Bengali MP3 song"
        >
          <Upload className="w-3.5 h-3.5 4xl:w-5 4xl:h-5" />
        </button>

      </div>
    </div>
  );
}
