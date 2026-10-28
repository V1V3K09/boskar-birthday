import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Music, Play, Square, Volume2, Sparkles } from 'lucide-react';
import { playDhakBeat, playShankh, playTempleBell } from '../utils/soundEngine';
import { fireFestiveConfetti } from '../utils/confettiHelper';

export default function DhakSoundboard() {
  const [isPlayingAuto, setIsPlayingAuto] = useState(false);
  const [activePad, setActivePad] = useState(null);
  const intervalRef = useRef(null);

  const dhakPads = [
    { id: 'dha', label: 'ধা (Dha)', sub: 'Deep Bass Drum', key: 'D', beat: 'dha', color: 'from-amber-600 to-red-700' },
    { id: 'tin', label: 'টিন (Tin)', sub: 'High Cane Ring', key: 'T', beat: 'tin', color: 'from-orange-500 to-amber-600' },
    { id: 'kura', label: 'কুড়-কুড় (Kura)', sub: 'Rolling Doublet', key: 'K', beat: 'kura', color: 'from-rose-600 to-pink-700' },
    { id: 'tak', label: 'তাক! (Tak!)', sub: 'Sharp Snappy Rim', key: 'S', beat: 'tak', color: 'from-amber-500 to-yellow-600' }
  ];

  const triggerBeat = (beat, id) => {
    playDhakBeat(beat);
    setActivePad(id);
    setTimeout(() => setActivePad(null), 150);
  };

  const handleShankh = () => {
    playShankh();
    fireFestiveConfetti();
  };

  // Auto-play the iconic Durga Puja Dhak rhythm:
  // "Dha - Tin - Kura - Tak! Dha - Kura - Tin - Tak!"
  const toggleAutoDhak = () => {
    if (isPlayingAuto) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsPlayingAuto(false);
    } else {
      setIsPlayingAuto(true);
      const rhythmPattern = ['dha', 'tin', 'kura', 'tak', 'dha', 'kura', 'tin', 'tak'];
      let step = 0;

      intervalRef.current = setInterval(() => {
        const beatType = rhythmPattern[step % rhythmPattern.length];
        playDhakBeat(beatType);
        setActivePad(beatType);
        setTimeout(() => setActivePad(null), 140);
        step++;
      }, 240);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section id="dhak-section" className="relative py-16 sm:py-24 4xl:py-32 px-4 sm:px-8 max-w-7xl 3xl:max-w-[1900px] 4xl:max-w-[2400px] mx-auto z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl 4xl:max-w-5xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-rose-300 text-xs sm:text-sm 4xl:text-lg font-medium mb-4">
          <Music className="w-4 h-4 4xl:w-6 4xl:h-6 text-rose-300" />
          <span>শারদোৎসবের ধ্বনি • Sound of Durga Puja</span>
        </div>

        <h2 className="text-3xl sm:text-5xl 4xl:text-6xl font-extrabold font-bengali text-white tracking-tight mb-4 text-balance">
          ঢাক ও শঙ্খের আনন্দ বাদ্যি (Play the Festive Beats)
        </h2>

        <p className="text-slate-300 text-base sm:text-xl 4xl:text-2xl font-light text-pretty">
          The soul of Bengal awakens to the rhythm of the Dhak and the sacred resonance of the Shankha. Tap the drums below or start the auto-rhythm!
        </p>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <button
            onClick={toggleAutoDhak}
            className={`flex items-center gap-2.5 px-6 sm:px-8 4xl:px-10 py-3.5 sm:py-4 4xl:py-5 rounded-2xl font-bold text-sm sm:text-base 4xl:text-xl transition-all duration-200 cursor-pointer shadow-lg ${
              isPlayingAuto
                ? 'bg-rose-600 text-white shadow-glow-sindoor ring-2 ring-white'
                : 'bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-500 hover:to-red-500 text-white'
            }`}
          >
            {isPlayingAuto ? <Square className="w-5 h-5 4xl:w-6 4xl:h-6 fill-white" /> : <Play className="w-5 h-5 4xl:w-6 4xl:h-6 fill-white" />}
            <span>{isPlayingAuto ? 'Stop Auto-Dhak Rhythm' : 'Play Puja Dhak Rhythm Loop'}</span>
          </button>

          <button
            onClick={handleShankh}
            className="flex items-center gap-2.5 px-6 sm:px-8 4xl:px-10 py-3.5 sm:py-4 4xl:py-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base 4xl:text-xl backdrop-blur-md cursor-pointer transition-all hover:border-amber-400"
          >
            <span className="text-xl 4xl:text-2xl">🐚</span>
            <span>শঙ্খধ্বনি বাজান (Blow Sacred Shankha)</span>
          </button>
        </div>
      </div>

      {/* Interactive Drum Pads Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 4xl:gap-8 max-w-5xl 4xl:max-w-6xl mx-auto">
        {dhakPads.map((pad) => {
          const isActive = activePad === pad.id || activePad === pad.beat;
          return (
            <motion.button
              key={pad.id}
              whileTap={{ scale: 0.92 }}
              onClick={() => triggerBeat(pad.beat, pad.id)}
              className={`relative rounded-3xl p-6 sm:p-8 4xl:p-10 border transition-all duration-150 cursor-pointer flex flex-col items-center justify-center text-center shadow-ultra-card ${
                isActive
                  ? 'bg-gradient-to-t ' + pad.color + ' border-amber-300 scale-95 shadow-glow-gold'
                  : 'glass-panel border-white/10 hover:border-amber-400/50 hover:bg-white/5'
              }`}
            >
              <div className="text-4xl sm:text-5xl 4xl:text-6xl mb-3">🥁</div>
              <h3 className="text-xl sm:text-2xl 4xl:text-3xl font-extrabold font-bengali text-white mb-1">
                {pad.label}
              </h3>
              <p className="text-xs sm:text-sm 4xl:text-base text-slate-300 font-medium">
                {pad.sub}
              </p>
              <span className="mt-3 text-[10px] 4xl:text-xs text-amber-300/80 bg-black/40 px-2 py-0.5 rounded-full border border-amber-400/20">
                Tap to Hit
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Durga Puja Chant Callout */}
      <div className="mt-12 text-center">
        <p className="text-lg sm:text-2xl 4xl:text-3xl font-bold font-bengali text-gradient-gold">
          “বলো দুর্গা মাই কি... জয়! আসছে বছর আবার হবে!”
        </p>
      </div>

    </section>
  );
}
