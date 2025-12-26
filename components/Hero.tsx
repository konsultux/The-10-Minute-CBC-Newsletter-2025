import React from 'react';
import { INTRO_TEXT } from '../constants';
import { Star, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 container mx-auto text-center overflow-hidden">

      {/* Decorative Stars */}
      <div className="absolute top-10 left-10 text-[#d4af37] opacity-40 animate-pulse"><Star size={24} fill="currentColor" /></div>
      <div className="absolute top-20 right-20 text-[#c41e3a] opacity-30"><Star size={32} fill="currentColor" /></div>

      <div className="max-w-3xl mx-auto space-y-8 relative z-10">

        {/* Festive Header Stamp/Badge Look */}
        <div className="inline-block relative">
          <h1 className="text-6xl md:text-8xl font-script text-[#c41e3a] leading-tight drop-shadow-sm transform -rotate-2">
            Greetings!
          </h1>
          <div className="absolute -top-6 -right-8 text-[#1a472a] opacity-20 transform rotate-12">
            <Star size={64} />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-[#1a472a]/30"></div>
          <div className="text-[#d4af37] font-display font-bold tracking-[0.2em] text-sm uppercase">
            Peace & Joy
          </div>
          <div className="h-px w-16 bg-[#1a472a]/30"></div>
        </div>

        <div className="bg-white/50 p-6 md:p-8 rounded-xl border border-[#d4af37]/30 shadow-sm backdrop-blur-sm">
          <p className="text-[#1a472a] font-serif leading-relaxed text-lg whitespace-pre-line">
            {INTRO_TEXT}
          </p>
        </div>

        <div className="pt-2">
          <a
            href="https://chat.whatsapp.com/IhnDkL4i84gBitS5pnIbdZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#d4af37] text-[#1a472a] px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-[#c41e3a] hover:text-white hover:scale-105 transition-all duration-300 transform"
          >
            <MessageCircle size={24} />
            Join the Community
          </a>
          <p className="mt-3 text-[#fcfbf8]/60 text-sm italic">
            Join our WhatsApp group for updates
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;