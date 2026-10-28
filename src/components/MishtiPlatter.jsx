import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Utensils, Heart } from 'lucide-react';
import { playTempleBell } from '../utils/soundEngine';
import { fireSweetSparkles } from '../utils/confettiHelper';

const sweetsList = [
  {
    id: 'rosogolla',
    name: 'স্পঞ্জ রসগোল্লা',
    english: 'Kolkata Sponge Rosogolla',
    emoji: '⚪',
    color: 'from-amber-100 to-white',
    desc: 'Pure spongy chhana soaked in steaming cardamom syrup.',
    reaction: 'Sweet and juicy! Boskar’s face lights up with sheer Kolkata joy! 🍯'
  },
  {
    id: 'sandesh',
    name: 'নলেন গুড়ের সন্দেশ',
    english: 'Nolen Gurer Sandesh',
    emoji: '🥟',
    color: 'from-amber-200 to-orange-100',
    desc: 'Artisanal date-palm jaggery delicacy carrying winter nostalgia.',
    reaction: 'Aroma of fresh Nolen Gur! Pure divine bliss for Boskar! 🍂'
  },
  {
    id: 'mishtidoi',
    name: 'খাঁটি মিষ্টি দই',
    english: 'Earthen Pot Mishti Doi',
    emoji: '🏺',
    color: 'from-orange-200 to-amber-100',
    desc: 'Slow-caramelized thick creamy yogurt in a traditional clay handi.',
    reaction: 'Thick, creamy & cool! A celebratory feast without Mishti Doi is incomplete! 🍮'
  },
  {
    id: 'pitha',
    name: 'অসমীয়া তিল পিঠা',
    english: 'Assamese Til Pitha',
    emoji: '🥠',
    color: 'from-yellow-100 to-amber-200',
    desc: 'Delicate rolled Bora rice crust with aromatic roasted sesame & jaggery.',
    reaction: 'Crispy Assamese Bihu magic! Boskar honors the authentic northeastern flavor! 🌾'
  },
  {
    id: 'chamcham',
    name: 'পোড়াবাড়ির চমচম',
    english: 'Porabari Chomchom',
    emoji: '🍬',
    color: 'from-amber-300 to-yellow-100',
    desc: 'Golden fried chhana drenched in thick condensed saffron mawa.',
    reaction: 'Rich and royal! Perfect festive fuel for the birthday boy! ✨'
  },
  {
    id: 'rajbhog',
    name: 'কেশর রাজভোগ',
    english: 'Kesar Rajbhog',
    emoji: '🟡',
    color: 'from-yellow-300 to-amber-400',
    desc: 'Stuffed with pistachio and infused with deep saffron golden hue.',
    reaction: 'Golden elegance fit for a king on 29th October! 👑'
  }
];

export default function MishtiPlatter() {
  const [fedCount, setFedCount] = useState(0);
  const [lastFed, setLastFed] = useState(null);

  const handleFeedSweet = (sweet, event) => {
    setFedCount((prev) => prev + 1);
    setLastFed(sweet);

    playTempleBell();

    // Trigger sweet sparkle confetti originating near click
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    fireSweetSparkles(x, y);
  };

  return (
    <section id="mishti-section" className="relative py-16 sm:py-24 4xl:py-32 px-4 sm:px-8 max-w-7xl 3xl:max-w-[1900px] 4xl:max-w-[2400px] mx-auto z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl 4xl:max-w-5xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs sm:text-sm 4xl:text-lg font-medium mb-4">
          <Utensils className="w-4 h-4 4xl:w-6 4xl:h-6 text-amber-300" />
          <span>মিষ্টি মুখ ও ভোজ • The Royal Bengali & Assamese Sweet Platter</span>
        </div>

        <h2 className="text-3xl sm:text-5xl 4xl:text-6xl font-extrabold font-bengali text-gradient-gold tracking-tight mb-4 text-balance">
          বোস্কারকে মিষ্টি খাওয়ান (Feed Boskar a Sweet)
        </h2>

        <p className="text-slate-300 text-base sm:text-xl 4xl:text-2xl font-light text-pretty">
          Click on any traditional sweet below to gift it to Boskar with celebration sparkles and joyful wishes!
        </p>

        {/* Total Sweets Fed Badge */}
        <div className="mt-4 inline-flex items-center gap-3 px-6 py-2 rounded-full glass-panel border border-amber-400/40 text-amber-200 font-semibold text-sm sm:text-base 4xl:text-xl">
          <Heart className="w-4 h-4 text-rose-400 fill-rose-400 animate-pulse" />
          <span>Total Sweets Offered to Boskar:</span>
          <span className="text-lg sm:text-xl 4xl:text-2xl font-bold text-amber-300 tabular-nums">
            {fedCount}
          </span>
        </div>
      </div>

      {/* Dynamic Alert Banner for Last Fed Sweet */}
      <AnimatePresence mode="wait">
        {lastFed && (
          <motion.div
            key={lastFed.id + fedCount}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="max-w-xl 4xl:max-w-2xl mx-auto mb-10 p-4 rounded-2xl bg-gradient-to-r from-amber-600/40 via-rose-600/40 to-amber-600/40 border border-amber-400/50 backdrop-blur-xl text-center shadow-glow-gold"
          >
            <p className="text-white font-medium text-sm sm:text-base 4xl:text-xl">
              🎉 <span className="font-bold text-amber-200">{lastFed.name}</span> offered! {lastFed.reaction}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid of Sweets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 4xl:gap-8">
        {sweetsList.map((sweet) => (
          <motion.button
            key={sweet.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={(e) => handleFeedSweet(sweet, e)}
            className="group relative text-left rounded-3xl p-6 sm:p-8 4xl:p-10 glass-panel-gold border border-amber-400/25 hover:border-amber-400/60 shadow-lg hover:shadow-glow-gold transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Sweet Emoji Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-5xl 4xl:text-6xl group-hover:rotate-12 transition-transform duration-300">
                  {sweet.emoji}
                </span>
                <span className="text-xs 4xl:text-sm font-bold text-amber-300 bg-black/40 px-3 py-1 rounded-full border border-amber-400/30">
                  Tap to Feed 🍽️
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl 4xl:text-3xl font-extrabold font-bengali text-white mb-1">
                {sweet.name}
              </h3>

              <h4 className="text-xs sm:text-sm 4xl:text-base font-medium text-amber-300/80 mb-3">
                {sweet.english}
              </h4>

              <p className="text-slate-300 text-sm sm:text-base 4xl:text-lg font-light leading-relaxed mb-4 text-pretty">
                {sweet.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs sm:text-sm 4xl:text-base text-amber-200/90 font-medium">
              <span>Touch to feed Boskar</span>
              <span className="group-hover:translate-x-1 transition-transform">➡️</span>
            </div>
          </motion.button>
        ))}
      </div>

    </section>
  );
}
