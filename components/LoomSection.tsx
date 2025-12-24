import React from 'react';
import { PAST_BOOKS } from '../constants';
import BookCard from './BookCard';

const LoomSection: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-[#fdfbf7]">
      {/* Background Texture - Vintage Paper feel */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('/images/cream-paper.png')]"></div>

      <div className="container mx-auto px-4 relative max-w-7xl">

        {/* The Warp (Vertical Loom Thread) */}
        {/* Mobile: Left aligned */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#d4af37] md:hidden"></div>

        {/* Desktop: Center aligned 'Gold Thread' - Metallic effect */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#b8860b] via-[#ffd700] to-[#b8860b] shadow-md z-0"></div>

        <div className="relative z-10 space-y-32 md:space-y-64 py-12 md:py-32">
          {PAST_BOOKS.map((book, index) => (
            <BookCard key={book.id} book={book} index={index} />
          ))}
        </div>

        {/* Decorative End Knot */}
        <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="w-6 h-6 rounded-full bg-[#c41e3a] border-4 border-[#d4af37] shadow-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default LoomSection;