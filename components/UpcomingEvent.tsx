import React from 'react';
import { UPCOMING_EVENT } from '../constants';
import { Calendar, Clock, User, Snowflake } from 'lucide-react';

const UpcomingEvent: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with Festive Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f2d1e] via-[#8f1525] to-[#0f2d1e] z-0"></div>
      
      {/* Frost/Snow Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/snow.png')] opacity-20 z-0 pointer-events-none mix-blend-overlay"></div>
      
      {/* Ambient Icy Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-white rounded-full blur-[120px] opacity-10 z-0 animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#d4af37] rounded-full blur-[120px] opacity-10 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Frosty Glass Card */}
        <div className="max-w-5xl mx-auto relative">
            {/* Outer Glow/Ice Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-white/30 via-white/5 to-white/30 rounded-[2.5rem] blur-sm opacity-70"></div>
            
            <div className="relative rounded-[2.5rem] bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden">
                
                {/* Ice Sheen Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>

                <div className="p-8 md:p-12 relative">
                    {/* Inner Dashed Border */}
                    <div className="absolute inset-4 md:inset-6 border-2 border-dashed border-white/20 rounded-[1.5rem] pointer-events-none"></div>

                    {/* Snowflake Decorations */}
                    <Snowflake className="absolute top-8 left-8 text-white/40 animate-[spin_10s_linear_infinite]" size={32} />
                    <Snowflake className="absolute top-12 right-12 text-white/30" size={24} />
                    <Snowflake className="absolute bottom-8 left-12 text-white/30" size={28} />
                    <Snowflake className="absolute bottom-10 right-10 text-white/40 animate-[pulse_3s_ease-in-out_infinite]" size={32} />

                    <div className="text-center mb-12 relative z-10">
                        <div className="inline-block relative">
                            <h2 className="text-[#d4af37] font-display font-bold text-xl tracking-[0.25em] uppercase mb-3 drop-shadow-md">
                                You Are Invited
                            </h2>
                            {/* Decorative divider */}
                            <div className="w-16 h-0.5 bg-[#d4af37]/60 mx-auto rounded-full"></div>
                        </div>
                        <h3 className="text-5xl md:text-7xl font-script text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] mt-4">
                            Healing & Restoration
                        </h3>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 items-center relative z-10 px-4 md:px-8">
                        <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
                            <h4 className="text-2xl md:text-4xl font-bold font-display text-white leading-tight drop-shadow-md">
                                "{UPCOMING_EVENT.title}"
                            </h4>
                            <p className="text-white/90 font-serif leading-relaxed text-lg drop-shadow-sm font-light">
                                {UPCOMING_EVENT.description}
                            </p>
                            
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
                                <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-md shadow-lg group cursor-default">
                                    <Calendar className="text-[#d4af37] group-hover:scale-110 transition-transform" size={20} />
                                    <span className="text-white font-bold tracking-wide text-sm md:text-base">{UPCOMING_EVENT.date}</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-md shadow-lg group cursor-default">
                                    <Clock className="text-[#d4af37] group-hover:rotate-12 transition-transform" size={20} />
                                    <span className="text-white font-bold tracking-wide text-sm md:text-base">{UPCOMING_EVENT.time}</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 flex flex-col items-center text-center">
                            <div className="relative mb-4">
                                <div className="absolute inset-0 bg-[#d4af37] blur-lg opacity-20 rounded-full"></div>
                                <div className="w-36 h-36 bg-gradient-to-b from-[#1a472a] to-[#0f2d1e] rounded-full border-4 border-[#d4af37]/80 flex items-center justify-center shadow-2xl relative overflow-hidden ring-4 ring-white/5">
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/snow.png')] opacity-30"></div>
                                    <User className="w-16 h-16 text-[#d4af37]" />
                                </div>
                            </div>
                            <p className="text-[#d4af37] text-xs uppercase tracking-[0.2em] mb-2 font-bold drop-shadow-md">Guest Speaker</p>
                            <p className="text-2xl font-bold text-white font-display drop-shadow-md">{UPCOMING_EVENT.speaker}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;