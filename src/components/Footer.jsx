import React from 'react';
import { Heart, Sparkles, ArrowUp } from 'lucide-react';
import { fireFestiveConfetti } from '../utils/confettiHelper';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 4xl:py-16 border-t border-white/10 bg-bengal-night/80 backdrop-blur-xl z-10 text-center">
      <div className="max-w-7xl 3xl:max-w-[1900px] 4xl:max-w-[2400px] mx-auto px-4 sm:px-8 space-y-6">
        
        {/* Decorative Lotus & Diya */}
        <div className="flex items-center justify-center gap-3 text-2xl 4xl:text-3xl">
          <span>🪷</span>
          <span className="w-12 h-px bg-amber-400/40" />
          <span>🪔</span>
          <span className="w-12 h-px bg-amber-400/40" />
          <span>🪷</span>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl 4xl:text-3xl font-extrabold font-bengali text-gradient-gold">
            শুভ জন্মদিন ভাস্কর (Happy Birthday Boskar!)
          </h3>
          <p className="text-amber-200/90 text-sm sm:text-base 4xl:text-xl font-medium tracking-wide">
            Celebrating an unforgettable life journey on <strong className="text-white">29th October</strong>
          </p>
        </div>

        <p className="text-slate-400 text-xs sm:text-sm 4xl:text-base max-w-2xl 4xl:max-w-3xl mx-auto font-light text-pretty">
          Crafted in celebration of Bengal’s timeless Sharadotsav, Durga Puja, Rabindra Sangeet, and sweets, united with Assam’s sacred Gamusa, majestic Jaapi, Rongali Bihu, and the mighty Brahmaputra.
        </p>

        {/* Back to Top & Celebration trigger */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={fireFestiveConfetti}
            className="px-5 py-2 rounded-full bg-bengal-sindoor/40 hover:bg-bengal-sindoor/70 border border-amber-400/40 text-amber-200 text-xs sm:text-sm 4xl:text-base font-semibold cursor-pointer transition-all"
          >
            🎉 Fire More Fireworks & Confetti
          </button>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs sm:text-sm 4xl:text-base transition-all cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to Top</span>
          </button>
        </div>

        <div className="pt-6 border-t border-white/5 text-[11px] 4xl:text-xs text-slate-500 font-sans">
          Joy Maa Durga • Jai Aai Asom • May 29th October bring boundless light and laughter
        </div>

      </div>
    </footer>
  );
}
