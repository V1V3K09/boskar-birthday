import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Sparkles, CheckCircle2 } from 'lucide-react';
import { playTempleBell } from '../utils/soundEngine';
import { fireFestiveConfetti } from '../utils/confettiHelper';

const diyaBlessings = [
  { id: 1, name: 'সুস্বাস্থ্য ও দীর্ঘায়ু', english: 'Vibrant Health & Long Life', icon: '🌿' },
  { id: 2, name: 'জ্ঞান ও প্রজ্ঞা', english: 'Wisdom & Deep Intellect', icon: '📖' },
  { id: 3, name: 'সাফল্য ও সমৃদ্ধি', english: 'Unbounded Success & Abundance', icon: '🌟' },
  { id: 4, name: 'আনন্দ ও মানসিক শান্তি', english: 'Joy, Laughter & Inner Peace', icon: '🕊️' },
  { id: 5, name: 'সাহস ও অদম্য তেজ', english: 'Fearless Courage & Tenacity', icon: '🔱' },
];

export default function LightDiyaWidget() {
  const [litDiyas, setLitDiyas] = useState([1]); // First diya is pre-lit as welcoming flame
  const [allLitCelebrated, setAllLitCelebrated] = useState(false);

  const toggleDiya = (id) => {
    playTempleBell();
    setLitDiyas((prev) => {
      let next;
      if (prev.includes(id)) {
        next = prev.filter((item) => item !== id);
      } else {
        next = [...prev, id];
      }

      // Check if all 5 are lit
      if (next.length === 5 && !allLitCelebrated) {
        setAllLitCelebrated(true);
        fireFestiveConfetti();
      }
      return next;
    });
  };

  const handleLightAll = () => {
    playTempleBell();
    setLitDiyas([1, 2, 3, 4, 5]);
    if (!allLitCelebrated) {
      setAllLitCelebrated(true);
      fireFestiveConfetti();
    }
  };

  return (
    <section id="diya-section" className="relative py-16 sm:py-24 4xl:py-32 px-4 sm:px-8 max-w-7xl 3xl:max-w-[1900px] 4xl:max-w-[2400px] mx-auto z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl 4xl:max-w-5xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs sm:text-sm 4xl:text-lg font-medium mb-4">
          <Flame className="w-4 h-4 4xl:w-6 4xl:h-6 text-amber-300" />
          <span>শুভ প্রদীপ প্রজ্বলন • Sacred Diya Lighting Altar</span>
        </div>

        <h2 className="text-3xl sm:text-5xl 4xl:text-6xl font-extrabold font-bengali text-gradient-gold tracking-tight mb-4 text-balance">
          বোস্কারের জীবনের জন্য পঞ্চপ্রদীপ প্রজ্বলন করুন
        </h2>

        <p className="text-slate-300 text-base sm:text-xl 4xl:text-2xl font-light text-pretty">
          Click on each earthen prodeep to ignite the flame of blessing. Light all 5 to bestow complete auspicious light upon Boskar!
        </p>

        {litDiyas.length < 5 && (
          <button
            onClick={handleLightAll}
            className="mt-4 px-5 py-2 rounded-full bg-amber-600/30 hover:bg-amber-600/50 border border-amber-400/40 text-amber-200 text-xs sm:text-sm 4xl:text-base font-semibold cursor-pointer transition-all"
          >
            ✨ Light All Prodeeps Together
          </button>
        )}
      </div>

      {/* Completion Banner */}
      <AnimatePresence>
        {litDiyas.length === 5 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl 4xl:max-w-3xl mx-auto mb-10 p-6 rounded-3xl glass-panel-gold border-2 border-amber-400 text-center shadow-glow-gold"
          >
            <div className="flex items-center justify-center gap-2 text-amber-300 text-2xl sm:text-3xl mb-2">
              <span>🪔</span>
              <span className="font-bengali font-bold">পঞ্চপ্রদীপ সফলভাবে প্রজ্জ্বলিত!</span>
              <span>🪔</span>
            </div>
            <p className="text-amber-100 font-light text-sm sm:text-base 4xl:text-xl font-bengali">
              “অসতো মা সদ্‌গময়, তমসো মা জ্যোতির্গময়...” মা দুর্গা ও কামাখ্যার কৃপায় বোস্কারের চলার পথ সর্বদা এমন স্বর্ণালী আলোয় উদ্ভাসিত থাকুক!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5 Prodeeps Row/Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 4xl:gap-8 max-w-6xl 4xl:max-w-7xl mx-auto">
        {diyaBlessings.map((diya) => {
          const isLit = litDiyas.includes(diya.id);
          return (
            <motion.button
              key={diya.id}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => toggleDiya(diya.id)}
              className={`relative rounded-3xl p-6 sm:p-8 4xl:p-10 border transition-all duration-300 cursor-pointer flex flex-col items-center justify-between text-center overflow-hidden min-h-[220px] 4xl:min-h-[280px] ${
                isLit
                  ? 'glass-panel-gold border-amber-400/60 shadow-glow-gold'
                  : 'glass-panel border-white/10 opacity-70 hover:opacity-100'
              }`}
            >
              {/* Diya Visual */}
              <div className="relative flex flex-col items-center my-auto">
                {/* Flame */}
                {isLit ? (
                  <div className="w-6 h-10 4xl:w-8 4xl:h-14 bg-gradient-to-t from-orange-600 via-amber-400 to-yellow-100 rounded-full flame-animated shadow-glow-gold mb-1" />
                ) : (
                  <div className="w-2 h-4 4xl:w-3 4xl:h-6 bg-slate-600 rounded-full mb-1 opacity-50" />
                )}

                {/* Earthen Lamp Body */}
                <div className={`w-16 4xl:w-20 h-5 4xl:h-7 rounded-b-full shadow-md transition-colors duration-300 ${
                  isLit
                    ? 'bg-gradient-to-r from-amber-800 via-amber-600 to-yellow-800 border-t border-amber-300'
                    : 'bg-stone-700 border-t border-stone-500'
                }`} />
              </div>

              {/* Title & English */}
              <div className="w-full mt-4">
                <div className="text-sm 4xl:text-base font-bold text-amber-200 font-bengali">
                  {diya.name}
                </div>
                <div className="text-[11px] 4xl:text-sm text-slate-300 font-sans mt-0.5">
                  {diya.english}
                </div>
                <div className="mt-2 text-[10px] 4xl:text-xs text-amber-400 font-semibold">
                  {isLit ? '🔥 Lit with Love' : 'Tap to Light 🪔'}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

    </section>
  );
}
