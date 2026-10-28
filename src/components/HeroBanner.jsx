import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Flame, Music, Gift, Calendar, ShieldAlert } from 'lucide-react';
import { fireFestiveConfetti } from '../utils/confettiHelper';
import { playTempleBell } from '../utils/soundEngine';

const typewriterPhrases = [
  "শুভ জন্মদিন ভাস্কর!",
  "Happy Birthday, Boskar!",
  "29th October • The Day of Celebration!",
  "অসীম আনন্দ আৰু সাফল্যৰে ভৰি পৰক তোমাৰ জীৱন!",
];

export default function HeroBanner({ isUnlocked }) {
  const [currentText, setCurrentText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loveCount, setLoveCount] = useState(29);

  // Typewriter effect
  useEffect(() => {
    if (!isUnlocked) return;

    const currentPhrase = typewriterPhrases[phraseIdx];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        } else {
          // Pause at the end of phrase
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Deleting backward
        if (currentText.length > 0) {
          setCurrentText(currentPhrase.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIdx((prev) => (prev + 1) % typewriterPhrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIdx, isUnlocked]);

  const handleSendLove = () => {
    setLoveCount((prev) => prev + 1);
    playTempleBell();
    fireFestiveConfetti();
  };

  return (
    <section className="relative pt-8 pb-16 sm:py-20 4xl:py-28 px-4 sm:px-8 max-w-7xl 3xl:max-w-[1900px] 4xl:max-w-[2400px] mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 4xl:gap-16 items-center">
        
        {/* Left Column: Festive Titles, Typewriter, Date, and Description */}
        <div className="lg:col-span-7 4xl:col-span-7 space-y-6 4xl:space-y-8 text-center lg:text-left">
          
          {/* Top Pill Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
            {/* 29th October Special Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 4xl:px-6 4xl:py-2.5 rounded-full bg-gradient-to-r from-bengal-sindoor/60 to-amber-600/60 border border-amber-400/50 shadow-glow-gold backdrop-blur-md"
            >
              <Calendar className="w-4 h-4 4xl:w-6 4xl:h-6 text-amber-300" />
              <span className="text-amber-100 font-semibold text-sm sm:text-base 4xl:text-xl tracking-wide tabular-nums">
                29th October • Auspicious Birthday
              </span>
            </motion.div>

            {/* Durga Puja & Assam Cultural Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 4xl:px-5 4xl:py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs sm:text-sm 4xl:text-lg backdrop-blur-md">
              <span>🌸 শারদোৎসব & অসমীয়া হেৰিটেজ</span>
            </div>
          </div>

          {/* Typewriter Dynamic Calligraphy Header */}
          <div className="min-h-[100px] sm:min-h-[140px] 4xl:min-h-[180px] flex items-center justify-center lg:justify-start">
            <h1 className="text-4xl sm:text-6xl 3xl:text-7xl 4xl:text-8xl font-black font-bengali tracking-tight leading-tight">
              <span className="text-gradient-gold">
                {currentText}
              </span>
              <span className="inline-block w-1.5 sm:w-2.5 h-10 sm:h-14 4xl:h-20 bg-amber-400 ml-1.5 animate-pulse align-middle" />
            </h1>
          </div>

          {/* Subheading with Boskar tribute */}
          <p className="text-slate-200 text-lg sm:text-2xl 4xl:text-3xl font-light leading-relaxed max-w-2xl 4xl:max-w-4xl text-pretty font-bengali">
            <span className="font-semibold text-amber-300">শুভ জন্মদিন বোস্কার!</span> মা দুর্গার অসীম কৃপায় এবং কামাখ্যার পবিত্র আশীর্বাদে তোমার জীবনের প্রতিটি দিন ভরে উঠুক আনন্দ, সুস্বাস্থ্য এবং অবিস্মরণীয় সাফল্যে।
          </p>

          <p className="text-slate-400 text-sm sm:text-base 4xl:text-xl font-sans max-w-2xl 4xl:max-w-4xl">
            Today on <strong className="text-amber-300">October 29th</strong>, we celebrate Boskar with the rhythmic thrum of Durga Puja’s Dhak, the fluttering softness of Kash phool, the sacred devotion of Gamusa & Jaapi, and the eternal sweetness of Bengal and Assam.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 pb-6 lg:pb-0">
            <button
              onClick={handleSendLove}
              className="group flex items-center gap-3 px-6 sm:px-8 4xl:px-10 py-3.5 sm:py-4 4xl:py-5 rounded-2xl bg-gradient-to-r from-rose-600 via-bengal-sindoor to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-semibold text-base sm:text-lg 4xl:text-2xl shadow-glow-sindoor transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Heart className="w-5 h-5 4xl:w-7 4xl:h-7 text-rose-200 fill-rose-200 group-hover:scale-125 transition-transform" />
              <span>Send Blessings</span>
              <span className="ml-1 px-2.5 py-0.5 rounded-full bg-black/30 text-amber-200 text-xs sm:text-sm 4xl:text-base tabular-nums font-bold">
                {loveCount}
              </span>
            </button>

            <a
              href="#mishti-section"
              className="flex items-center gap-2 px-6 sm:px-7 4xl:px-9 py-3.5 sm:py-4 4xl:py-5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-base sm:text-lg 4xl:text-2xl backdrop-blur-lg transition-all hover:border-amber-400/50"
            >
              <Gift className="w-5 h-5 4xl:w-7 4xl:h-7 text-amber-300" />
              <span>মিষ্টি মুখ করান (Feed Sweets)</span>
            </a>

            <a
              href="#dhak-section"
              className="flex items-center gap-2 px-5 sm:px-6 4xl:px-8 py-3.5 sm:py-4 4xl:py-5 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-medium text-base sm:text-lg 4xl:text-2xl backdrop-blur-lg transition-all"
            >
              <span>🥁 ঢাক বাজান (Play Dhak)</span>
            </a>
          </div>

          {/* Quick jump anchor tags for 32" screens */}
          <div className="pt-2 flex flex-wrap gap-2 text-xs sm:text-sm 4xl:text-lg text-slate-400 justify-center lg:justify-start">
            <span className="text-slate-500">Quick explore:</span>
            <a href="#durga-section" className="hover:text-amber-300 underline underline-offset-4 decoration-amber-500/40">Durga Puja & Bengal</a>
            <span>•</span>
            <a href="#assam-section" className="hover:text-amber-300 underline underline-offset-4 decoration-emerald-500/40">Assam Heritage</a>
            <span>•</span>
            <a href="#diya-section" className="hover:text-amber-300 underline underline-offset-4 decoration-yellow-500/40">Light Prodeep</a>
            <span>•</span>
            <a href="#wishes-section" className="hover:text-amber-300 underline underline-offset-4 decoration-rose-500/40">Wall of Wishes</a>
          </div>
        </div>

        {/* Right Column: Boskar's Grand Portrait with Alpona & Gamusa Framing */}
        <div className="lg:col-span-5 4xl:col-span-5 flex justify-center">
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: 'spring', bounce: 0.2 }}
            className="relative w-72 sm:w-96 lg:w-[420px] 3xl:w-[480px] 4xl:w-[600px] group"
          >
            {/* Outer Aura Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-bengal-sindoor via-amber-500 to-emerald-600 rounded-3xl blur-2xl opacity-60 group-hover:opacity-85 transition duration-700 animate-pulse" />

            {/* Portrait Frame Container */}
            <div className="relative rounded-3xl p-3 sm:p-4 4xl:p-5 glass-panel-gold border-2 border-amber-400/40 shadow-ultra-card overflow-hidden">
              
              {/* Gamusa & Alpona Corner Accents */}
              <div className="absolute top-0 left-0 w-24 h-6 bg-gradient-to-r from-red-600 via-white to-red-600 rounded-br-xl opacity-80" title="Gamusa motif" />
              <div className="absolute top-0 right-0 w-24 h-6 bg-gradient-to-l from-red-600 via-white to-red-600 rounded-bl-xl opacity-80" title="Gamusa motif" />

              {/* Photo Itself */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-black/40 border border-white/20">
                <img
                  src="/images/boskar.jpg"
                  alt="Boskar - Birthday Boy"
                  className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Bottom Overlay Ribbon */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-bengal-night via-bengal-night/80 to-transparent flex flex-col items-center text-center">
                  <div className="px-3 py-1 rounded-full bg-amber-500/30 border border-amber-400/50 text-amber-200 text-xs sm:text-sm 4xl:text-base font-bold mb-1 shadow-md">
                    👑 The Birthday Star • 29 Oct
                  </div>
                  <h3 className="text-xl sm:text-2xl 4xl:text-4xl font-extrabold text-white font-bengali">
                    ভাস্কর (Boskar)
                  </h3>
                  <p className="text-xs sm:text-sm 4xl:text-lg text-slate-300">
                    Spreading joy, warmth & brilliant smiles
                  </p>
                </div>
              </div>

              {/* Decorative Corner Alpana Floral Icons */}
              <div className="flex justify-between items-center mt-3 sm:mt-4 px-2 text-xs sm:text-sm 4xl:text-base text-amber-300/80 font-bengali">
                <span>🪔 শুভকামনা ও আশীর্বাদ</span>
                <span>অসম ও বাংলার গৌরব 🌸</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
