import React from 'react';
import { CLOSING_TEXT, SIGN_OFF } from '../constants';
import { Heart, Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a472a] text-[#fcfbf8] py-16 md:py-24 border-t-8 border-[#c41e3a]">
      <div className="container mx-auto px-4 text-center max-w-2xl relative">
        
        <div className="mb-12 relative z-10">
            <div className="inline-block p-4 rounded-full bg-[#c41e3a] mb-8 shadow-lg border-2 border-[#d4af37]">
                <Heart className="text-[#fcfbf8]" size={32} fill="currentColor" />
            </div>
            <p className="font-serif text-lg md:text-xl leading-relaxed text-[#fcfbf8]/90 whitespace-pre-line">
                {CLOSING_TEXT}
            </p>
        </div>

        <div className="border-t border-[#fcfbf8]/20 pt-12 space-y-4">
            <p className="font-serif italic text-[#d4af37] text-lg">{SIGN_OFF.line1}</p>
            <h4 className="font-script text-5xl text-[#fcfbf8] mt-4 transform -rotate-2">{SIGN_OFF.name}</h4>
            <div className="flex items-center justify-center gap-2 text-[#d4af37]/80 text-xs tracking-widest uppercase mt-4">
                <Star size={12} />
                <span>{SIGN_OFF.role}</span>
                <Star size={12} />
            </div>
        </div>

        <div className="mt-20 text-xs text-[#fcfbf8]/40 font-mono">
            &copy; 2025 The 10 Minute Catholic Book Club.
        </div>
      </div>
    </footer>
  );
};

export default Footer;