import React from 'react';
import { BookOpen, MessageCircle } from 'lucide-react';
import DonateButton from './DonateButton';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#1a472a] border-b-4 border-[#d4af37] shadow-lg">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo Placeholder - Gold Icon on Red BG */}
          <div className="bg-[#c41e3a] text-[#d4af37] p-2 rounded-lg shadow-inner border border-[#d4af37]/50">
            <BookOpen size={24} />
          </div>
          <div className="flex items-center">
            <span className="font-display font-bold text-white text-xl md:text-3xl tracking-tight leading-none">
              10 Minute CBC
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:block text-sm font-serif italic text-[#fcfbf8]/80 border-l border-[#fcfbf8]/20 pl-4">
            End of Year Newsletter
          </div>
          <a
            href="https://chat.whatsapp.com/IhnDkL4i84gBitS5pnIbdZ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#d4af37] text-[#1a472a] px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold text-xs md:text-sm hover:bg-[#c41e3a] hover:text-white transition-colors flex items-center gap-2 shadow-md whitespace-nowrap"
          >
            <MessageCircle size={16} className="md:w-[18px] md:h-[18px]" />
            <span className="hidden md:inline">Join Community</span>
            <span className="md:hidden">Join</span>
          </a>
          <DonateButton />
        </div>
      </div>
    </header>
  );
};

export default Header;