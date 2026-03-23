import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item" style={{ borderBottom: '1px solid #e2e8f0', padding: '1rem 0' }}>
            <button
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', padding: '0.5rem 0', cursor: 'pointer', textAlign: 'left', fontWeight: '600', fontSize: '1.1rem', color: isOpen ? 'var(--primary)' : 'var(--text-dark)' }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isOpen && (
                <div style={{ padding: '1rem 0 0.5rem 0', color: 'var(--text-light)', lineHeight: '1.6' }} className="animate-fade-in">
                    {answer}
                </div>
            )}
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            q: "Are your nurses and caretakers verified?",
            a: "Yes, absolutely. Every professional deployed by SMR Nursing Bureau undergoes a stern 3-step verification process, including local police verification, Aadhar authentication, and a detailed medical skills assessment."
        },
        {
            q: "Do you provide 24/7 services?",
            a: "Yes, we specialize in providing continuous 24-hour care for bedridden or ICU patients at home, as well as 12-hour day/night shifts for general hospital assistance."
        },
        {
            q: "What if the caretaker goes on leave or falls ill?",
            a: "Uninterrupted care is our guarantee. If your assigned caretaker cannot make it, we immediately dispatch a replacement of equal qualification within 4-6 hours to ensure continuity of care."
        },
        {
            q: "Do you provide medical equipment like oxygen cylinders or beds?",
            a: "Yes, as part of our ICU Setup at Home service, we facilitate the rental and arrangement of all necessary medical equipment including ventilators, DVT pumps, oxygen concentrators, and Fowler beds."
        },
        {
            q: "How are the charges calculated?",
            a: "Charges depend strictly on the type of service (Caretaker vs BSC Nurse) and the duration (12-hour vs 24-hour shifts). We operate on maximum transparency with absolutely zero hidden agent charges."
        }
    ];

    return (
        <div className="page-wrapper animate-fade-in">
            <div className="page-header bg-light section">
                <div className="container text-center">
                    <h1 className="hero-title">Frequently Asked <span className="text-secondary">Questions</span></h1>
                    <p className="hero-description mx-auto">Get quick answers to common questions about our services and policies.</p>
                </div>
            </div>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="card" style={{ padding: '2rem' }}>
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
