import React from 'react';
import { Book } from '../types';
import { Quote, Sparkles } from 'lucide-react';

interface BookCardProps {
    book: Book;
    index: number;
}

const BookCard: React.FC<BookCardProps> = ({ book, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`relative w-full flex flex-col md:flex-row items-start md:gap-24 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

            {/* --- DESKTOP CONNECTORS --- */}

            {/* The Connector Thread - Dashed for better integration, properly vertically centered */}
            <div className={`hidden md:block absolute top-[13.5rem] -translate-y-1/2 h-px border-t-2 border-dashed border-[#d4af37]/60 w-1/2 z-0 pointer-events-none
            ${isEven ? 'right-1/2' : 'left-1/2'}
        `}></div>

            {/* The Center Knot - Vertically centered */}
            <div className="hidden md:block absolute left-1/2 top-[13.5rem] -translate-x-1/2 -translate-y-1/2 w-6 h-6 z-20">
                <div className="w-6 h-6 bg-[#c41e3a] rounded-full border-4 border-[#d4af37] shadow-md relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 rounded-full"></div>
                </div>
            </div>

            {/* --- IMAGE SECTION --- */}
            <div className="w-full md:w-1/2 flex justify-center z-10 pt-4 md:pt-0">
                <div className={`relative group w-full max-w-sm flex justify-center ${isEven ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16'}`}>

                    {/* Book Cover Container - Gold Border */}
                    <div className="relative aspect-[2/3] w-48 md:w-72 transform transition-all duration-700 group-hover:-translate-y-2 group-hover:rotate-1 shadow-2xl rounded-sm border-4 border-[#1a472a] bg-[#fcfbf8] overflow-hidden">
                        <img
                            src={`/images/book-${book.id}.jpg`}
                            alt={book.title}
                            className="w-full h-full object-cover filter contrast-[1.05]"
                        />
                    </div>

                    {/* Floor Shadow */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-6 bg-[#1a472a]/20 blur-xl rounded-[100%]"></div>
                </div>
            </div>

            {/* --- CONTENT SECTION --- */}
            <div className="w-full md:w-1/2 relative px-4 md:px-0 z-10 md:mt-6">

                {/* Mobile Connector */}
                <div className="absolute left-0 top-0 w-full h-full md:hidden pointer-events-none overflow-hidden">
                    <div className="absolute left-4 top-36 -translate-x-1/2 w-3 h-3 bg-[#d4af37] rounded-full border-2 border-white shadow-sm"></div>
                </div>

                <div className={`max-w-xl pl-8 md:pl-0 ${isEven ? 'mr-auto text-left' : 'ml-auto text-left md:text-right'}`}>

                    <div className={`flex flex-col gap-2 mb-6 ${isEven ? 'items-start' : 'md:items-end items-start'}`}>

                        {/* Stamp Badge for Number */}
                        <div className="relative mb-2">
                            <div className="bg-[#c41e3a] text-[#fcfbf8] px-4 py-2 relative flex items-center justify-center shadow-md">
                                <div className="absolute inset-0.5 border border-dashed border-[#fcfbf8]/50"></div>
                                <span className="font-display font-bold tracking-widest uppercase text-sm relative z-10">
                                    Book 0{book.id}
                                </span>
                            </div>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-display font-bold text-[#1a472a] leading-[1.1]">
                            {book.title}
                        </h2>
                        <p className="text-[#c41e3a] text-xl font-script">
                            by {book.author}
                        </p>
                    </div>

                    {book.quote && (
                        <div className={`relative mb-8 group ${isEven ? '' : 'md:flex md:justify-end'}`}>
                            <div className={`relative bg-[#fcfbf8] p-6 md:p-8 border-l-4 border-[#d4af37] shadow-lg rounded-sm
                            ${isEven ? '' : 'border-l-0 border-r-4'}
                        `}>
                                <Quote
                                    size={24}
                                    className={`text-[#c41e3a] absolute -top-3 bg-[#fcfbf8] p-1 ${isEven ? '-left-2' : '-right-2'}`}
                                />
                                <p className="font-serif italic text-[#1a472a]/80 text-lg leading-relaxed">
                                    "{book.quote}"
                                </p>
                            </div>
                        </div>
                    )}

                    <div className={`prose prose-stone prose-lg ${isEven ? '' : 'md:text-right'} max-w-none text-[#1a472a]/90`}>
                        <p className="font-serif leading-relaxed whitespace-pre-line">
                            {book.description}
                        </p>
                    </div>

                    {book.specialNote && (
                        <div className={`mt-8 p-6 bg-[#1a472a] text-[#fcfbf8] rounded-lg shadow-lg relative overflow-hidden inline-block ${isEven ? '' : ''}`}>
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,white_2px,transparent_2px)] [background-size:16px_16px]"></div>
                            <p className="text-sm font-medium flex items-center gap-3 relative z-10 font-display tracking-wide">
                                <Sparkles className="shrink-0 text-[#d4af37]" size={20} />
                                <span>{book.specialNote}</span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookCard;