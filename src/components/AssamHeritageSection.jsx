import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mountain, Waves, Compass, Shield } from 'lucide-react';

const assamHeritageItems = [
  {
    title: "অসমীয়া গামোচা • Sacred Gamusa",
    subtitle: "Emblem of Respect & Warm Love",
    icon: "🧣",
    tag: "গৌৰৱ",
    desc: "Woven with white cotton and striking red floral Phool, the Gamusa is presented to loved ones as the ultimate symbol of honor, devotion, and heartfelt blessings.",
    subtext: "বোস্কাৰলৈ আমাৰ আন্তৰিক মৰম আৰু সশ্ৰদ্ধ জন্মদিনৰ উপহাৰ।"
  },
  {
    title: "ঐতিহাসিক জাপি • The Regal Jaapi",
    subtitle: "Symbol of Dignity, Strength & Pride",
    icon: "👒",
    tag: "প্ৰতীক",
    desc: "Handcrafted from Tokou leaves, bamboo, and radiant felt, the Jaapi stands tall as a shelter against storms and a crown of dignity representing Assam's rich heritage.",
    subtext: "Dignity that shields and inspires greatness in life's journey."
  },
  {
    title: "বিহুৰ ঢোল আৰু পেঁপা • Spirit of Bihu",
    subtitle: "Energetic Folk Rhythm & Joy",
    icon: "📯",
    tag: "আনন্দ",
    desc: "The exhilarating melody of Mahor Singor Pepa (buffalo horn pipe) and thunderous Bihu Dhol that awakens nature into vibrant dance and celebration.",
    subtext: "ঢোলৰ চাপৰ আৰু পেঁপাৰ সুৰত নাচনীৰ কঁকাল ভগা বিহু আনন্দ।"
  },
  {
    title: "আই কামাখ্যাৰ আশীৰ্বাদ • Maa Kamakhya",
    subtitle: "Divine Shakti & Eternal Protection",
    icon: "🛕",
    tag: "কৃপা",
    desc: "Revered atop Nilachal hill, the divine mother Kamakhya blesses Boskar with inner peace, indomitable energy, long life, and spiritual prosperity.",
    subtext: "মা কামাখ্যাৰ কৃপাত জীৱনটো সুখ আৰু মঙ্গলেৰে উদ্ভাসিত হওক।"
  },
  {
    title: "মহাবাহু ব্ৰহ্মপুত্ৰ • Mighty Brahmaputra",
    subtitle: "Vast Horizons & Deep Wisdom",
    icon: "🌊",
    tag: "বিস্তৃতি",
    desc: "The untamed red river flowing with eternal majesty from the Himalayas through Assam, echoing Bhupen Hazarika's timeless songs of brotherhood and unity.",
    subtext: "Like the mighty Luit, may Boskar's horizons always remain boundless."
  },
  {
    title: "সেউজীয়া চাহ বাগিচা • Lush Assam Tea Estates",
    subtitle: "Serenity, Earthiness & Fresh Beginnings",
    icon: "🍃",
    tag: "প্ৰকৃতি",
    desc: "Rolling emerald carpets kissed by morning mist, producing the boldest and richest aroma in the world that brings people together every dawn.",
    subtext: "Pure freshness and grounded warmth in every step of life."
  }
];

export default function AssamHeritageSection() {
  return (
    <section id="assam-section" className="relative py-16 sm:py-24 4xl:py-32 px-4 sm:px-8 max-w-7xl 3xl:max-w-[1900px] 4xl:max-w-[2400px] mx-auto z-10">
      
      {/* Decorative Gamusa Ribbon */}
      <div className="h-2 w-full gamusa-border rounded-full mb-12 sm:mb-16 opacity-80" />

      {/* Header */}
      <div className="text-center max-w-3xl 4xl:max-w-5xl mx-auto mb-12 sm:mb-16 4xl:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-assam-teaDark/60 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm 4xl:text-lg font-medium mb-4">
          <Sparkles className="w-4 h-4 4xl:w-6 4xl:h-6 text-emerald-300" />
          <span>অসমৰ স্বাভিমান আৰু ঐতিহ্য • The Majestic Soul of Assam</span>
        </div>

        <h2 className="text-3xl sm:text-5xl 4xl:text-6xl font-extrabold font-bengali text-white tracking-tight mb-4 text-balance">
          মহাবাহু ব্ৰহ্মপুত্ৰ আৰু কামাখ্যাৰ আশীৰ্বাদ
        </h2>

        <p className="text-slate-300 text-base sm:text-xl 4xl:text-2xl font-light text-pretty">
          From the vibrant rhythms of Rongali Bihu to the divine grace of Nilachal hill, Assam joins hands to honor Boskar with pure respect and unyielding warmth.
        </p>
      </div>

      {/* 3x2 Grid for 32" Expansive Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 4xl:gap-8">
        {assamHeritageItems.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group rounded-3xl p-6 sm:p-8 4xl:p-10 glass-panel-assam border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Top tag & Icon */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-4xl sm:text-5xl 4xl:text-6xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="text-xs 4xl:text-sm font-semibold tracking-wider text-emerald-200 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl 4xl:text-3xl font-bold font-bengali text-emerald-100 mb-1">
                {item.title}
              </h3>

              <h4 className="text-xs sm:text-sm 4xl:text-base font-medium text-emerald-400 mb-4">
                {item.subtitle}
              </h4>

              <p className="text-slate-300 text-sm sm:text-base 4xl:text-lg font-light leading-relaxed mb-6 text-pretty">
                {item.desc}
              </p>
            </div>

            {/* Assamese Verse Tag */}
            <div className="pt-4 border-t border-emerald-500/20 text-xs sm:text-sm 4xl:text-base text-emerald-300/80 font-bengali italic">
              {item.subtext}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
