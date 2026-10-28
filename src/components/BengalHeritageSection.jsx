import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Sun, Feather, Flame, Compass, Heart } from 'lucide-react';
import { playTempleBell } from '../utils/soundEngine';

const bengalHighlights = [
  {
    title: "শারদোৎসব ও মা দুর্গার আশীর্বাদ",
    englishTitle: "Durga Puja & Divine Strength",
    icon: "🔱",
    desc: "Late October marks the divine autumnal grace of Sharadotsav. May Maa Durga bestow Boskar with ten-handed strength, fearless courage, and supreme wisdom against every obstacle.",
    detail: "বলো দুর্গা মাই কি... জয়! কাশফুলের শুভ্রতায় শারদ প্রাতের আগমনী সুর।"
  },
  {
    title: "কাশফুল ও শিউলির মায়াবী ছোঁয়া",
    englishTitle: "Autumn Kash Phool & Shiuli Blooms",
    icon: "🌾",
    desc: "The pristine white feathers of Kash grass swaying by the riverside and fragrant Shiuli flowers falling at dawn herald the golden season in which Boskar was born.",
    detail: "আশ্বিন ও কার্তিকের সোনাঝরা আলোয় প্রকৃতির এক অপূর্ব উপহার।"
  },
  {
    title: "বিশ্বকবি রবীন্দ্রনাথের আশীর্বাণী",
    englishTitle: "Rabindranath Tagore's Birthday Poetry",
    icon: "📜",
    desc: "“আনন্দলোকে মঙ্গলালোকে বিরাজ সত্যসুন্দর... তোমার জন্মদিন হোক আনন্দধারায় স্নাত, আলোকের অনন্ত অমলিন ধারা বয়ে যাক তোমার জীবনে।”",
    detail: "A celebration of life, wisdom, poetry, and soulful artistic freedom."
  },
  {
    title: "কলকাতার আড্ডা ও ঐতিহ্যের সুর",
    englishTitle: "Kolkata Adda & Heritage Soul",
    icon: "☕",
    desc: "From animated philosophical chats over steaming clay cups of cha to the timeless silhouette of Howrah Bridge and the iconic ringing bells of Kolkata trams.",
    detail: "প্রাণবন্ত আড্ডা, সাহিত্যের রস, এবং খাঁটি বাঙ্গালিয়ানার উষ্ণতা।"
  }
];

export default function BengalHeritageSection() {
  return (
    <section id="durga-section" className="relative py-16 sm:py-24 4xl:py-32 px-4 sm:px-8 max-w-7xl 3xl:max-w-[1900px] 4xl:max-w-[2400px] mx-auto z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl 4xl:max-w-5xl mx-auto mb-12 sm:mb-16 4xl:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bengal-sindoor/30 border border-bengal-amberGold/30 text-amber-300 text-xs sm:text-sm 4xl:text-lg font-medium mb-4">
          <Sparkles className="w-4 h-4 4xl:w-6 4xl:h-6 text-amber-300" />
          <span>বাংলার শারদোৎসব ও চিরন্তন ঐতিহ্য • Bengal’s Sacred Spirit</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl 4xl:text-6xl font-extrabold font-bengali text-gradient-gold tracking-tight mb-4 text-balance">
          মা দুর্গার পদধূলি ও বাঙ্গালিয়ানার শ্রেষ্ঠ উপহার
        </h2>
        
        <p className="text-slate-300 text-base sm:text-xl 4xl:text-2xl font-light text-pretty">
          Born on the golden threshold of 29th October, Boskar carries the warmth, intellect, and celebratory fire that defines the soul of Bengal.
        </p>
      </div>

      {/* Grid of Bengal Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 4xl:gap-8">
        {bengalHighlights.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative rounded-3xl p-6 sm:p-8 4xl:p-10 glass-panel border border-bengal-amberGold/20 hover:border-bengal-amberGold/50 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Icon & English Title */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-4xl sm:text-5xl 4xl:text-6xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="text-xs 4xl:text-sm font-semibold tracking-wider uppercase text-amber-400/80 bg-bengal-sindoor/20 px-3 py-1 rounded-full border border-amber-400/20">
                  Bengal Motif
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl 4xl:text-3xl font-bold font-bengali text-white mb-2 leading-snug">
                {item.title}
              </h3>

              <h4 className="text-xs sm:text-sm 4xl:text-base font-semibold text-amber-300/90 mb-4 tracking-wide">
                {item.englishTitle}
              </h4>

              <p className="text-slate-300 text-sm sm:text-base 4xl:text-lg font-light leading-relaxed mb-6 text-pretty">
                {item.desc}
              </p>
            </div>

            {/* Bottom Accent */}
            <div className="pt-4 border-t border-white/10 text-xs sm:text-sm 4xl:text-base text-amber-200/70 font-bengali italic">
              {item.detail}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Poetic Banner Tribute */}
      <div className="mt-12 sm:mt-16 4xl:mt-20 rounded-3xl p-8 sm:p-12 4xl:p-16 glass-panel-gold border border-bengal-amberGold/30 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-3xl sm:text-4xl 4xl:text-5xl">🪔</span>
          <blockquote className="text-xl sm:text-3xl 4xl:text-4xl font-serif italic text-amber-100 font-bengali leading-relaxed text-balance">
            “তোমারে যে সুর দিয়েছি আমি সেই সুরে মোর গানে, <br className="hidden sm:inline" />
            তোমার জনম ধন্য হোক মা দুর্গার আশিসদানে।”
          </blockquote>
          <p className="text-xs sm:text-sm 4xl:text-base tracking-widest text-amber-300 uppercase font-sans">
            Dedicated to Boskar on 29th October • শারদ শুভেচ্ছা ও শুভ জন্মদিন
          </p>
        </div>
      </div>

    </section>
  );
}
