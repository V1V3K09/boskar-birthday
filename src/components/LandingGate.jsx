import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, Sparkles, Music } from 'lucide-react';
import { playShankh } from '../utils/soundEngine';
import { fireFestiveConfetti } from '../utils/confettiHelper';

export default function LandingGate({ onEnter }) {
  const handleEnter = () => {
    // Play sacred Shankha sound
    playShankh();
    // Fire festive fireworks confetti
    fireFestiveConfetti();
    // Notify parent to unlock audio & reveal site
    onEnter();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-bengal-night/95 backdrop-blur-2xl p-4 sm:p-8"
    >
      {/* Decorative Traditional Alpona Circular Radial Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] 4xl:w-[1200px] 4xl:h-[1200px] rounded-full bg-gradient-to-tr from-bengal-sindoor/30 via-bengal-amberGold/20 to-transparent blur-3xl animate-pulse" />
        <div className="absolute w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] 4xl:w-[900px] 4xl:h-[900px] rounded-full border border-bengal-gold/20 alpona-border opacity-30 animate-spin" style={{ animationDuration: '60s' }} />
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', bounce: 0.2, duration: 0.7 }}
        className="relative max-w-2xl 4xl:max-w-4xl w-full text-center glass-panel-gold rounded-3xl p-8 sm:p-12 4xl:p-16 border border-bengal-amberGold/30 shadow-ultra-card"
      >
        {/* Sacred Diya with flame */}
        <div className="flex justify-center mb-6">
          <div className="relative flex flex-col items-center">
            {/* Flickering Flame */}
            <div className="w-6 h-10 sm:w-8 sm:h-12 bg-gradient-to-t from-orange-600 via-amber-400 to-yellow-100 rounded-full flame-animated shadow-glow-gold" />
            {/* Earthen Brass Diya Base */}
            <div className="w-16 sm:w-20 h-5 bg-gradient-to-r from-amber-800 via-amber-600 to-yellow-800 rounded-b-full border-t border-amber-300 shadow-lg" />
          </div>
        </div>

        {/* Auspicious Date Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 4xl:px-6 4xl:py-2.5 rounded-full bg-bengal-crimson/50 border border-bengal-amberGold/40 text-amber-200 text-sm sm:text-base 4xl:text-xl font-medium tracking-wide mb-6">
          <Sparkles className="w-4 h-4 4xl:w-6 4xl:h-6 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
          <span>29th October • শুভ জন্মদিন উদযাপন</span>
        </div>

        {/* Photo Avatar of Boskar with Ornamental Alpona Ring */}
        <div className="relative mx-auto mb-6 w-36 h-36 sm:w-44 sm:h-44 4xl:w-56 4xl:h-56">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-bengal-sindoor via-amber-400 to-emerald-600 animate-spin" style={{ animationDuration: '12s' }} />
          <div className="absolute inset-1 rounded-full bg-bengal-night p-1">
            <img
              src="/images/boskar.jpg"
              alt="Birthday Boy Boskar"
              className="w-full h-full object-cover object-top rounded-full shadow-inner"
            />
          </div>
          <span className="absolute -bottom-2 -right-2 text-2xl 4xl:text-3xl bg-bengal-deepRed border border-amber-400 rounded-full p-1.5 shadow-lg">
            👑
          </span>
        </div>

        {/* Bengali Calligraphic Welcome */}
        <h2 className="text-2xl sm:text-3xl 4xl:text-5xl font-bold font-bengali text-white mb-2 text-balance">
          আনন্দলোকে মঙ্গলালোকে বিরাজ সত্যসুন্দর...
        </h2>
        
        <h1 className="text-3xl sm:text-5xl 4xl:text-6xl font-extrabold font-bengali text-gradient-gold mb-4 tracking-tight">
          শুভ জন্মদিন ভাস্কর!
        </h1>

        <p className="text-slate-300 text-sm sm:text-base 4xl:text-xl mb-8 max-w-lg 4xl:max-w-2xl mx-auto text-pretty font-light">
          Celebrating Boskar with the divine grace of Bengal’s Sharadotsav and the proud spirit of Assam. Click below to inaugurate the celebration with music and blessings!
        </p>

        {/* Inauguration Call-to-Action Button */}
        <button
          onClick={handleEnter}
          className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 4xl:px-14 py-4 sm:py-5 4xl:py-6 rounded-2xl bg-gradient-to-r from-bengal-sindoor via-amber-600 to-bengal-sindoor hover:from-red-600 hover:via-amber-500 hover:to-red-600 text-white font-bold text-lg sm:text-xl 4xl:text-2xl tracking-wide shadow-glow-sindoor hover:shadow-glow-gold transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer border border-amber-300/40"
          aria-label="Enter celebration and start Bengali music"
        >
          <Music className="w-6 h-6 4xl:w-8 4xl:h-8 text-amber-200 group-hover:rotate-12 transition-transform duration-300" />
          <span>উদ্বোধন করুন • Enter with Music</span>
          <Volume2 className="w-5 h-5 4xl:w-7 4xl:h-7 text-amber-200 animate-pulse" />
        </button>

        <p className="mt-4 text-xs 4xl:text-sm text-slate-400">
          🎵 Tap will immediately play the festive Bengali background melody & sound
        </p>
      </motion.div>
    </motion.div>
  );
}
