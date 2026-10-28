import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles, Heart, Music } from 'lucide-react';

import ParticleCanvas from './components/ParticleCanvas';
import LandingGate from './components/LandingGate';
import HeroBanner from './components/HeroBanner';
import BengalHeritageSection from './components/BengalHeritageSection';
import AssamHeritageSection from './components/AssamHeritageSection';
import MishtiPlatter from './components/MishtiPlatter';
import DhakSoundboard from './components/DhakSoundboard';
import LightDiyaWidget from './components/LightDiyaWidget';
import WishesWall from './components/WishesWall';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import { fireFestiveConfetti } from './utils/confettiHelper';

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div className="relative min-h-dvh text-slate-100 selection:bg-amber-500 selection:text-black">
      
      {/* 60fps Shiuli Flower & Kash Phool Canvas Background */}
      <ParticleCanvas />

      {/* Landing Curtain-Raiser Gate to unlock audio & reveal site */}
      <AnimatePresence>
        {!isUnlocked && (
          <LandingGate onEnter={() => setIsUnlocked(true)} />
        )}
      </AnimatePresence>

      {/* Top Glassmorphic Navigation Bar */}
      <header className="sticky top-0 z-30 w-full px-4 sm:px-8 py-3.5 backdrop-blur-xl bg-bengal-night/70 border-b border-white/10">
        <div className="max-w-7xl 3xl:max-w-[1900px] 4xl:max-w-[2400px] mx-auto flex items-center justify-between">
          
          {/* Logo / Title */}
          <div className="flex items-center gap-3">
            <span className="text-2xl 4xl:text-3xl">🪔</span>
            <div>
              <div className="font-extrabold font-bengali text-base sm:text-lg 4xl:text-2xl text-gradient-gold leading-tight">
                শুভ জন্মদিন ভাস্কর (Boskar)
              </div>
              <div className="text-[10px] 4xl:text-xs text-amber-300 font-semibold tracking-wider uppercase">
                29th October Celebration
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 4xl:gap-8 text-xs sm:text-sm 4xl:text-lg font-medium text-slate-300 font-bengali">
            <a href="#durga-section" className="hover:text-amber-300 transition-colors">শারদোৎসব ও বাংলা</a>
            <a href="#assam-section" className="hover:text-amber-300 transition-colors">অসমীয়া ঐতিহ্য</a>
            <a href="#mishti-section" className="hover:text-amber-300 transition-colors">মিষ্টি মুখ</a>
            <a href="#dhak-section" className="hover:text-amber-300 transition-colors">ঢাকের বাদ্যি</a>
            <a href="#diya-section" className="hover:text-amber-300 transition-colors">প্রদীপ প্রজ্বলন</a>
            <a href="#wishes-section" className="hover:text-amber-300 transition-colors">শুভেচ্ছা বার্তা</a>
          </nav>

          {/* Top Celebration Button */}
          <button
            onClick={fireFestiveConfetti}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-bengal-sindoor to-amber-600 hover:from-red-600 hover:to-amber-500 text-white text-xs sm:text-sm 4xl:text-base font-bold shadow-md hover:shadow-glow-gold transition-all active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 4xl:w-4 4xl:h-4 text-amber-200" />
            <span>Celebrate 29 Oct 🎉</span>
          </button>
        </div>
      </header>

      {/* Main Page Flow */}
      <main className="relative z-10 space-y-8 pb-32 sm:pb-24">
        {/* Hero Banner with Typewriter greeting & 29th Oct celebration */}
        <HeroBanner isUnlocked={isUnlocked} />

        {/* Bengal & Durga Puja Section */}
        <BengalHeritageSection />

        {/* Assam Cultural Heritage Section */}
        <AssamHeritageSection />

        {/* Interactive Virtual Mishti Platter */}
        <MishtiPlatter />

        {/* Interactive Durga Puja Dhak & Shankh Soundboard */}
        <DhakSoundboard />

        {/* Interactive 5-Prodeep Lighting Altar */}
        <LightDiyaWidget />

        {/* Wall of Warm Wishes & Message Board */}
        <WishesWall />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating Audio Player */}
      <AudioPlayer isUnlocked={isUnlocked} />

    </div>
  );
}
