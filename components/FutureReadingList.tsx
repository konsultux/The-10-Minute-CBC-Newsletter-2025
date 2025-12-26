import React from 'react';
import { READING_LIST_2026, INTRO_2026_TEXT } from '../constants';
import { CalendarDays, Hourglass, Bookmark } from 'lucide-react';

const FutureReadingList: React.FC = () => {
    return (
        <section className="py-20 container mx-auto px-4 bg-[#fcfbf8]">
            <div className="max-w-3xl mx-auto mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a472a] mb-8">
                    2026 Reading Journey
                </h2>
                <div className="prose prose-lg mx-auto bg-[#fffdf5] p-8 rounded-sm border-2 border-[#1a472a]/10 shadow-sm relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1a472a] text-[#d4af37] px-4 py-1 text-sm font-bold uppercase tracking-widest rounded-sm">
                        A Note from Nyandia
                    </div>
                    <p className="font-serif text-[#1a472a]/80 whitespace-pre-line text-lg leading-relaxed">
                        {INTRO_2026_TEXT}
                    </p>
                </div>
            </div>

            <div className="relative max-w-5xl mx-auto">
                {/* Vertical dashed line - Green */}
                <div className="absolute left-8 top-4 bottom-4 w-px border-l-2 border-dashed border-[#1a472a]/30 md:left-1/2 md:-ml-[1px]"></div>

                <div className="space-y-12">
                    {READING_LIST_2026.map((item, index) => (
                        <div key={index} className="relative flex flex-col md:flex-row md:items-center gap-6 group">

                            {/* Date/Duration Badge - Left on Desktop */}
                            <div className={`pl-16 md:pl-0 md:w-1/2 md:text-right md:pr-16 ${index % 2 !== 0 ? 'md:order-last md:text-left md:pl-16 md:pr-0' : ''}`}>
                                <div className="inline-flex flex-col md:items-end items-start gap-2">
                                    <span className="inline-flex items-center gap-2 text-[#c41e3a] font-bold text-sm uppercase tracking-wider font-display">
                                        <CalendarDays size={16} />
                                        {item.dates}
                                    </span>
                                    <span className="inline-flex items-center gap-2 text-[#1a472a]/60 text-xs font-bold uppercase tracking-widest">
                                        <Hourglass size={14} />
                                        {item.duration}
                                    </span>
                                </div>
                            </div>

                            {/* Center Node - Stamp Shape */}
                            <div className="absolute left-8 -translate-x-1/2 w-8 h-8 bg-[#fcfbf8] border-2 border-[#1a472a] rotate-45 z-10 md:left-1/2 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                                <div className="w-4 h-4 bg-[#c41e3a] opacity-20"></div>
                            </div>

                            {/* Content Card - Right on Desktop - Stamp Style */}
                            <div className={`pl-16 md:pl-0 md:w-1/2 md:pl-16 ${index % 2 !== 0 ? 'md:order-first md:text-right md:pr-16 md:pl-0' : ''}`}>
                                <div className="bg-white border-2 border-[#1a472a]/10 p-1 rounded-sm shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                                    <div className="border border-dashed border-[#1a472a]/30 p-5 h-full bg-[#fdfbf7]">
                                        <h3 className="text-xl font-bold font-display text-[#1a472a] leading-snug mb-2 group-hover:text-[#c41e3a] transition-colors">
                                            {item.title}
                                        </h3>
                                        {item.author && (
                                            <p className="text-[#1a472a]/60 text-sm font-serif italic border-t border-[#1a472a]/10 pt-2 inline-block">
                                                by {item.author}
                                            </p>
                                        )}
                                        {item.note && (
                                            <div className="mt-3 flex items-center gap-2 text-[#c41e3a] md:justify-end justify-start">
                                                <Bookmark size={14} fill="currentColor" />
                                                <p className="text-xs font-bold uppercase tracking-wide">
                                                    {item.note}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FutureReadingList;