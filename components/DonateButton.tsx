import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { Heart } from 'lucide-react';

const DonateButton: React.FC = () => {
    const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxx';
    const [email, setEmail] = useState('donor@example.com');
    const [amount, setAmount] = useState(100000); // Amount in kobo (1000.00 NGN)
    const [name, setName] = useState('Anonymous Donor');
    const [phone, setPhone] = useState('');

    const componentProps = {
        email,
        amount,
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

    // Use a custom button trigger to handle the UI better or a modal approach
    // For simplicity and aesthetic matching, we'll trigger a modal or just use the button directly but styled
    // Since PaystackButton renders a button, we can style it.
    // However, usually we want to capture amount first.
    // For the "Click to Donate" simple flow without inputting amount on our site (Paystack popup handles card details but amount is usually pre-set or passed).
    // Wait, Paystack Inline JS (which react-paystack uses) usually requires amount passed in.
    // To allow user to choose amount, we'd need a small modal on our side *before* the Paystack popup, OR we use a Paystack Payment Page link.
    // But the requirement is "Donate CTA".
    // Let's create a button that opens a simple native dialog to ask for amount/email, then triggers paystack?
    // Or simpler: A fixed amount "Support Us" button, or minimal fields.

    // Let's stick to a clean UI: A button "Donate" that perhaps opens a small overlay (modal) to enter amount, then "Proceed to Pay".

    // Actually, to keep it very simple for the MVP of "Add Donate CTA":
    // We'll make it a link to a Paystack Payment Page if the user had one (easiest), 
    // BUT the request implies integration ("set up a Paystack account").
    // Let's assume we want the popup. 
    // We will create a button that, when clicked, opens a simple modal to enter amount/email.

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
                                    className="w-full p-2 border border-gray-300 rounded focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none"
                                    placeholder="jane@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-[#1a472a] mb-1">Amount (NGN)</label>
                                <input
                                    type="number"
                                    value={amount / 100}
                                    onChange={(e) => setAmount(Number(e.target.value) * 100)}
                                    className="w-full p-2 border border-gray-300 rounded focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none"
                                    placeholder="1000"
                                />
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
