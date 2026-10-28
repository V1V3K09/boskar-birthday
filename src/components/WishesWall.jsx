import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareHeart, Send, Sparkles, Heart } from 'lucide-react';
import { playTempleBell } from '../utils/soundEngine';
import { fireFestiveConfetti } from '../utils/confettiHelper';

const initialWishes = [
  {
    id: 1,
    name: 'Shreya & Friends',
    relation: 'Kolkata Adda Gang',
    message: 'শুভ জন্মদিন বোস্কার! 29th October এর মিষ্টি বাতাস যেন তোমার জীবনে একরাশ সাফল্য ও আনন্দ বয়ে আনে। মা দুর্গার কৃপায় এগিয়ে চলো!',
    time: '29 Oct • 00:01 AM',
    likes: 18,
    badge: '🌸 Bengal'
  },
  {
    id: 2,
    name: 'Anupam & Family',
    relation: 'Guwahati Connections',
    message: 'Happy Birthday Boskar! ব্ৰহ্মপুত্ৰৰ বিশালতা আৰু কামাখ্যাৰ কৃপাত তোমাৰ সকলো সপোন দিঠক হওক। Enjoy the day to the fullest!',
    time: '29 Oct • 00:03 AM',
    likes: 15,
    badge: '🧣 Assam'
  },
  {
    id: 3,
    name: 'Sourav Da',
    relation: 'Senior Brother',
    message: 'Dearest Boskar, you are one of the most hardworking and genuine souls. May this birthday on 29th Oct mark the beginning of your grandest milestone year yet!',
    time: '29 Oct • 00:05 AM',
    likes: 22,
    badge: '✨ Blessing'
  },
  {
    id: 4,
    name: 'Moumita & Rohit',
    relation: 'Dev & Design Pair',
    message: 'আজকের দিনে কোনো কোডিং বা টেনশন নয়, শুধুই রসগোল্লা আর মিষ্টি দই দিয়ে পেটপুজো! Happy Birthday Boskar!',
    time: '29 Oct • 00:08 AM',
    likes: 12,
    badge: '🍬 Feast'
  }
];

export default function WishesWall() {
  const [wishes, setWishes] = useState(initialWishes);
  const [senderName, setSenderName] = useState('');
  const [senderRelation, setSenderRelation] = useState('');
  const [senderMessage, setSenderMessage] = useState('');

  const handleAddWish = (e) => {
    e.preventDefault();
    if (!senderName.trim() || !senderMessage.trim()) return;

    const newWish = {
      id: Date.now(),
      name: senderName.trim(),
      relation: senderRelation.trim() || 'Well-wisher',
      message: senderMessage.trim(),
      time: 'Just now',
      likes: 1,
      badge: '❤️ Blessing'
    };

    setWishes([newWish, ...wishes]);
    setSenderName('');
    setSenderRelation('');
    setSenderMessage('');

    playTempleBell();
    fireFestiveConfetti();
  };

  const handleLike = (id) => {
    setWishes((prev) =>
      prev.map((w) => (w.id === id ? { ...w, likes: w.likes + 1 } : w))
    );
  };

  return (
    <section id="wishes-section" className="relative py-16 sm:py-24 4xl:py-32 px-4 sm:px-8 max-w-7xl 3xl:max-w-[1900px] 4xl:max-w-[2400px] mx-auto z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl 4xl:max-w-5xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs sm:text-sm 4xl:text-lg font-medium mb-4">
          <MessageSquareHeart className="w-4 h-4 4xl:w-6 4xl:h-6 text-rose-300" />
          <span>হৃদয়স্পর্শী আশীর্বাদ • Wall of Birthday Blessings</span>
        </div>

        <h2 className="text-3xl sm:text-5xl 4xl:text-6xl font-extrabold font-bengali text-white tracking-tight mb-4 text-balance">
          বোস্কারের জন্য ভালোবাসার বার্তা (Wishes Wall)
        </h2>

        <p className="text-slate-300 text-base sm:text-xl 4xl:text-2xl font-light text-pretty">
          Warm messages and prayers pouring in from friends and well-wishers celebrating Boskar’s birthday on 29th October.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left: Interactive Form to Post Wish */}
        <div className="lg:col-span-5 4xl:col-span-4 glass-panel-gold rounded-3xl p-6 sm:p-8 4xl:p-10 border border-amber-400/30 shadow-ultra-card">
          <h3 className="text-xl sm:text-2xl 4xl:text-3xl font-bold font-bengali text-white mb-2 flex items-center gap-2">
            <span>✍️</span> নিজের বার্তা লিখুন (Add Your Wish)
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm 4xl:text-base mb-6 font-light">
            Leave your personalized birthday blessing for Boskar to read on his special day!
          </p>

          <form onSubmit={handleAddWish} className="space-y-4">
            <div>
              <label className="block text-xs 4xl:text-sm font-medium text-amber-200 mb-1.5">
                Your Name (আপনার নাম) *
              </label>
              <input
                type="text"
                required
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="e.g. Souvik / Ankita"
                className="w-full px-4 py-3 4xl:py-4 rounded-xl bg-black/40 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm 4xl:text-base transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs 4xl:text-sm font-medium text-amber-200 mb-1.5">
                Relation / City (পরিচয় / শহর)
              </label>
              <input
                type="text"
                value={senderRelation}
                onChange={(e) => setSenderRelation(e.target.value)}
                placeholder="e.g. College Friend / Assam / Kolkata"
                className="w-full px-4 py-3 4xl:py-4 rounded-xl bg-black/40 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm 4xl:text-base transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs 4xl:text-sm font-medium text-amber-200 mb-1.5">
                Birthday Blessing / Message (শুভেচ্ছা বার্তা) *
              </label>
              <textarea
                required
                rows={4}
                value={senderMessage}
                onChange={(e) => setSenderMessage(e.target.value)}
                placeholder="Write your heartfelt blessing or memory with Boskar..."
                className="w-full px-4 py-3 4xl:py-4 rounded-xl bg-black/40 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm 4xl:text-base transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 4xl:py-4 rounded-xl bg-gradient-to-r from-bengal-sindoor to-amber-600 hover:from-red-600 hover:to-amber-500 text-white font-bold text-sm sm:text-base 4xl:text-lg shadow-glow-sindoor transition-all cursor-pointer"
            >
              <Send className="w-4 h-4 4xl:w-5 4xl:h-5" />
              <span>বার্তা পাঠান (Send Blessing to Wall)</span>
            </button>
          </form>
        </div>

        {/* Right: Messages Stream */}
        <div className="lg:col-span-7 4xl:col-span-8 space-y-4 4xl:space-y-6">
          <AnimatePresence>
            {wishes.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="rounded-3xl p-6 4xl:p-8 glass-panel border border-white/10 hover:border-amber-400/30 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 4xl:w-12 4xl:h-12 rounded-full bg-gradient-to-tr from-amber-500 to-rose-600 flex items-center justify-center text-white font-bold text-base 4xl:text-lg shadow">
                      {item.name[0]}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg 4xl:text-xl font-bold text-white leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-xs 4xl:text-sm text-slate-400">
                        {item.relation} • <span className="text-slate-500">{item.time}</span>
                      </p>
                    </div>
                  </div>

                  <span className="text-xs 4xl:text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300 font-medium">
                    {item.badge}
                  </span>
                </div>

                <p className="text-slate-200 text-sm sm:text-base 4xl:text-lg font-light leading-relaxed my-3 text-pretty">
                  {item.message}
                </p>

                <div className="flex justify-end items-center pt-2 border-t border-white/5">
                  <button
                    onClick={() => handleLike(item.id)}
                    className="inline-flex items-center gap-1.5 text-xs 4xl:text-sm text-rose-300 hover:text-rose-200 transition-colors cursor-pointer"
                  >
                    <Heart className="w-4 h-4 fill-rose-400 text-rose-400" />
                    <span>Blessing</span>
                    <span className="font-bold tabular-nums">({item.likes})</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
}
