import React, { useState, useEffect } from 'react';
import { X, PhoneCall, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LeadPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState("idle");

    useEffect(() => {
        // Only show once per session to avoid annoying the user
        const hasSeenPopup = sessionStorage.getItem('hasSeenLeadPopup');
        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 12000); // 12 seconds delay before offering help

            return () => clearTimeout(timer);
        }
    }, []);

    const closePopup = () => {
        setIsOpen(false);
        sessionStorage.setItem('hasSeenLeadPopup', 'true');
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        const formData = new FormData(e.target);
        
        // Reusing the same Web3Forms access key as Booking.jsx
        formData.append("access_key", "1f156382-e9c0-4f0d-8d61-5419137549b4");
        formData.append("subject", "URGENT LEAD FROM POPUP");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await res.json();
            if (data.success) {
                setStatus('success');
                setTimeout(() => closePopup(), 4000);
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 50 }} 
                        animate={{ opacity: 1, scale: 1, y: 0 }} 
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        className="glass-card"
                        style={{ width: '90%', maxWidth: '450px', background: 'white', position: 'relative', overflow: 'hidden' }}
                    >
                        {/* Close button */}
                        <button onClick={closePopup} style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', cursor: 'pointer', color: '#666' }}>
                            <X size={24} />
                        </button>

                        <div style={{ background: 'var(--primary)', color: 'white', padding: '1.5rem', textAlign: 'center' }}>
                            <PhoneCall size={40} style={{ marginBottom: '0.5rem' }} />
                            <h3 style={{ margin: 0, fontSize: '1.5rem', fontFamily: 'Plus Jakarta Sans' }}>Need Urgent Care?</h3>
                            <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', opacity: 0.9 }}>Get a callback from our medical coordinators within 5 minutes.</p>
                        </div>

                        <div style={{ padding: '2rem' }}>
                            {status === 'success' ? (
                                <div style={{ textAlign: 'center', color: '#25D366' }}>
                                    <h3>Request Received!</h3>
                                    <p>We are calling you right now.</p>
                                </div>
                            ) : (
                                <form onSubmit={onSubmit}>
                                    <div style={{ marginBottom: '1rem' }}>
                                        <input type="text" name="name" required placeholder="Patient/Relative Name" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc', outline: 'none' }} />
                                    </div>
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <input type="tel" name="phone" required placeholder="Mobile Number" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc', outline: 'none' }} />
                                    </div>
                                    <button type="submit" disabled={status === 'submitting'} className="btn btn-secondary w-full" style={{ width: '100%' }}>
                                        {status === 'submitting' ? 'Sending...' : 'Request Callback Now'}
                                    </button>
                                    
                                    {status === 'error' && (
                                        <div style={{ marginTop: '1rem', color: 'red', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                                            <AlertCircle size={16} /> Failed to send. Please call us directly.
                                        </div>
                                    )}
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LeadPopup;
