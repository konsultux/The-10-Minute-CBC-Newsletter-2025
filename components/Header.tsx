import React from 'react';
import { BookOpen } from 'lucide-react';

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
        <div className="hidden md:block text-sm font-serif italic text-[#fcfbf8]/80 border-l border-[#fcfbf8]/20 pl-4">
            End of Year Newsletter
        </div>
      </div>
    </header>
  );
};

export default Header;