import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Check, X, RefreshCw, Heart } from 'lucide-react';

export type PaymentStatus = 'success' | 'error' | null;

interface StatusModalProps {
    status: PaymentStatus;
    onClose: () => void;
    onRetry?: () => void;
}

const StatusModal: React.FC<StatusModalProps> = ({ status, onClose, onRetry }) => {
    const audioContextRef = useRef<AudioContext | null>(null);

    // Audio Synthesis Logic
    const playSound = (type: 'success' | 'error') => {
        try {
            const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
            if (!AudioContextClass) return;

            if (!audioContextRef.current) {
                audioContextRef.current = new AudioContextClass();
            }

            const ctx = audioContextRef.current;
            // Resume context if suspended (browser autoplay policy)
            if (ctx.state === 'suspended') {
                ctx.resume();
            }

            const masterGain = ctx.createGain();
            masterGain.connect(ctx.destination);
            masterGain.gain.setValueAtTime(0.1, ctx.currentTime); // keep volume low

            if (type === 'success') {
                // Major chord arpeggio (C5, E5, G5, C6)
                const frequencies = [523.25, 659.25, 783.99, 1046.50];
                const timings = [0, 0.1, 0.2, 0.3];

                frequencies.forEach((freq, i) => {
                    const osc = ctx.createOscillator();
                    const noteGain = ctx.createGain();

                    osc.type = 'sine';
                    osc.frequency.value = freq;

                    noteGain.connect(masterGain);
                    osc.connect(noteGain);

                    const startTime = ctx.currentTime + timings[i];

                    noteGain.gain.setValueAtTime(0, startTime);
                    noteGain.gain.linearRampToValueAtTime(1, startTime + 0.05);
                    noteGain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.5);

                    osc.start(startTime);
                    osc.stop(startTime + 0.6);
                });
            } else {
                // Error sound: descending tritones or dissonant
                const osc = ctx.createOscillator();
                const noteGain = ctx.createGain();

                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(150, ctx.currentTime);
                osc.frequency.linearRampToValueAtTime(100, ctx.currentTime + 0.3);

                noteGain.connect(masterGain);
                osc.connect(noteGain);

                noteGain.gain.setValueAtTime(0, ctx.currentTime);
                noteGain.gain.linearRampToValueAtTime(0.8, ctx.currentTime + 0.05);
                noteGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);

                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + 0.4);
            }

        } catch (e) {
            console.error("Audio playback implementation failed", e);
        }
    };

    useEffect(() => {
        if (!status) return;

        if (status === 'success') {
            // 1. Confetti
            const duration = 3000;
            const end = Date.now() + duration;

            const frame = () => {
                confetti({
                    particleCount: 2,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#c41e3a', '#d4af37', '#1a472a']
                });
                confetti({
                    particleCount: 2,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#c41e3a', '#d4af37', '#1a472a']
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            };
            frame();

            // 2. Audio
            playSound('success');

            // 3. Haptics
            if (navigator.vibrate) {
                navigator.vibrate([100, 50, 100, 50, 200]);
            }
        } else if (status === 'error') {
            // 1. Audio
            playSound('error');
            // 2. Haptics
            if (navigator.vibrate) {
                navigator.vibrate([300]);
            }
        }

    }, [status]);

    if (!status) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={onClose}
                />

                {/* Modal */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="bg-[#fcfbf8] rounded-2xl shadow-2xl p-8 max-w-sm w-full relative z-10 border-4 border-[#d4af37] text-center overflow-hidden"
                >
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#f9f5ea] to-transparent -z-10" />

                    {/* Icon Animation */}
                    <div className="mb-6 flex justify-center">
                        {status === 'success' ? (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", delay: 0.2, stiffness: 200 }}
                                className="w-24 h-24 bg-[#1a472a] rounded-full flex items-center justify-center shadow-lg"
                            >
                                <motion.div
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    <Check className="w-12 h-12 text-white" strokeWidth={3} />
                                </motion.div>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1, rotate: [0, -10, 10, -10, 10, 0] }}
                                transition={{ type: "spring", delay: 0.2, rotate: { delay: 0.4, duration: 0.5 } }}
                                className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center shadow-lg"
                            >
                                <X className="w-12 h-12 text-red-600" strokeWidth={3} />
                            </motion.div>
                        )}
                    </div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className={`font-serif text-3xl mb-3 ${status === 'success' ? 'text-[#1a472a]' : 'text-red-800'}`}>
                            {status === 'success' ? 'Thank You!' : 'Payment Failed'}
                        </h3>

                        <p className="text-gray-600 mb-8 font-sans leading-relaxed">
                            {status === 'success'
                                ? "Your donation has been received. We truly appreciate your support for the 10 Minute CBC."
                                : "Something went wrong with the transaction. Don't worry, no funds were deducted."}
                        </p>

                        <div className="flex flex-col gap-3">
                            {status === 'success' ? (
                                <button
                                    onClick={onClose}
                                    className="w-full bg-[#1a472a] text-white font-bold py-3.5 rounded-xl hover:bg-[#143620] transition-colors shadow-lg active:scale-95 transform duration-100 flex items-center justify-center gap-2"
                                >
                                    <span>Continue Reading</span>
                                </button>
                            ) : (
                                <>
                                    {onRetry && (
                                        <button
                                            onClick={onRetry}
                                            className="w-full bg-[#c41e3a] text-white font-bold py-3.5 rounded-xl hover:bg-[#a01830] transition-colors shadow-lg active:scale-95 transform duration-100 flex items-center justify-center gap-2"
                                        >
                                            <RefreshCw size={18} />
                                            <span>Try Again</span>
                                        </button>
                                    )}
                                    <button
                                        onClick={onClose}
                                        className="w-full bg-white text-gray-500 font-semibold py-3.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors active:scale-95 transform duration-100"
                                    >
                                        Maybe Later
                                    </button>
                                </>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default StatusModal;
