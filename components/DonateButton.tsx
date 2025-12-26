import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { Heart } from 'lucide-react';

const DonateButton: React.FC = () => {
    const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxx';
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState(100000); // Default to 1000 KES (in cents)
    const [customAmount, setCustomAmount] = useState(''); // For visual input
    const [name, setName] = useState('Anonymous Donor');
    const [phone, setPhone] = useState('');

    // Presets in KES (stored in cents for Paystack)
    const PRESETS = [
        { label: 'KES 500', value: 50000 },
        { label: 'KES 1,000', value: 100000 },
        { label: 'KES 2,500', value: 250000 },
    ];

    const handlePresetClick = (value: number) => {
        setAmount(value);
        setCustomAmount(''); // Clear custom input when preset is chosen
    };

    const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setCustomAmount(val);
        if (val) {
            setAmount(Number(val) * 100); // Convert to cents
        }
    };

    const componentProps = {
        email,
        amount,
        currency: 'KES',
        channels: ['card', 'mobile_money'],
        metadata: {
            name,
            phone,
            custom_fields: []
        },
        publicKey,
        text: "Donate",
        onSuccess: () => alert("Thanks for your donation!"),
        onClose: () => alert("Wait! We need your help!"),
    }

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="bg-[#c41e3a] text-[#d4af37] px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold text-xs md:text-sm hover:bg-[#a01830] hover:text-white transition-colors flex items-center gap-2 shadow-md whitespace-nowrap border border-[#d4af37]/30"
            >
                <Heart size={16} className="md:w-[18px] md:h-[18px]" fill="currentColor" />
                <span className="hidden md:inline">Donate</span>
                <span className="md:hidden">Give</span>
            </button>

            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-[#fcfbf8] p-6 rounded-xl shadow-2xl max-w-md w-full border-2 border-[#d4af37] relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-[#c41e3a]"
                        >
                            ✕
                        </button>
                        <h3 className="font-serif text-2xl text-[#1a472a] mb-4 flex items-center gap-2">
                            <Heart className="text-[#c41e3a]" fill="currentColor" />
                            Support 10 Minute CBC
                        </h3>
                        <p className="text-gray-600 mb-6 font-sans">
                            Your support helps us keep the servers running and the books reading.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-[#1a472a] mb-1">Email Address</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none placeholder:text-gray-300"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-[#1a472a] mb-2">Select Amount</label>
                                <div className="grid grid-cols-3 gap-2 mb-3">
                                    {PRESETS.map((preset) => (
                                        <button
                                            key={preset.value}
                                            onClick={() => handlePresetClick(preset.value)}
                                            className={`py-2 px-1 rounded border transition-colors text-sm font-semibold
                                                ${amount === preset.value && !customAmount
                                                    ? 'bg-[#1a472a] text-white border-[#1a472a]'
                                                    : 'bg-white text-[#1a472a] border-gray-300 hover:border-[#1a472a]'
                                                }`}
                                        >
                                            {preset.label}
                                        </button>
                                    ))}
                                </div>
                                <div className="relative">
                                    <span className="absolute left-3 top-2.5 text-gray-500 text-sm">KES</span>
                                    <input
                                        type="number"
                                        value={customAmount}
                                        onChange={handleCustomAmountChange}
                                        className={`w-full p-2 pl-12 border rounded focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none 
                                            ${customAmount ? 'border-[#d4af37] ring-1 ring-[#d4af37]' : 'border-gray-300'}`}
                                        placeholder="Other amount"
                                    />
                                </div>
                            </div>

                            <div className="pt-4">
                                <PaystackButton
                                    {...componentProps}
                                    className="w-full bg-[#1a472a] text-white font-bold py-3 rounded-lg hover:bg-[#143620] transition-colors shadow-lg"
                                />
                            </div>
                        </div>

                        <p className="text-xs text-center text-gray-400 mt-4">
                            Secured by Paystack
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default DonateButton;
