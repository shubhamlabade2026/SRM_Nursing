import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key", "1f156382-e9c0-4f0d-8d61-5419137549b4");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message Sent Successfully! We will respond shortly.");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error(error);
            setResult("An error occurred while submitting. Please try again.");
        }
    };

    return (
        <div className="page-wrapper animate-fade-in relative">
            <div className="page-header bg-light section">
                <div className="container text-center">
                    <h1 className="hero-title">Contact <span className="text-secondary">Us</span></h1>
                    <p className="hero-description mx-auto">Whether you need immediate emergency staff or just want to inquire about our services, we are here 24/7 to listen and assist.</p>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: '30px', right: '30px', background: '#25D366', color: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(37, 211, 102, 0.4)', zIndex: 1000, cursor: 'pointer', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <MessageCircle size={32} />
            </a>

            <section className="section">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'start', gap: '4rem' }}>

                        {/* Contact Information */}
                        <div className="contact-info-section">
                            <h2 className="mb-4">Get In Touch</h2>
                            <p className="text-muted mb-5">Our coordination team operates round the clock. Feel free to call us for immediate allocation of hospital caretakers or nurses.</p>

                            <div className="info-box flex items-start mb-4 gap-4 p-4 card">
                                <div className="icon-wrapper" style={{ flexShrink: 0 }}><MapPin size={24} /></div>
                                <div>
                                    <h4 className="mb-1">Head Office Location</h4>
                                    <p className="text-muted m-0">SMR Nursing Bureau Building,<br />Near Main City Hospital,<br />Aurangabad, 431001, MH, India</p>
                                </div>
                            </div>

                            <div className="info-box flex items-start mb-4 gap-4 p-4 card">
                                <div className="icon-wrapper" style={{ flexShrink: 0 }}><Phone size={24} /></div>
                                <div>
                                    <h4 className="mb-1">24/7 Helpline</h4>
                                    <p className="text-muted m-0">+91 999 999 9999<br />+91 888 888 8888</p>
                                </div>
                            </div>

                            <div className="info-box flex items-start mb-4 gap-4 p-4 card">
                                <div className="icon-wrapper" style={{ flexShrink: 0 }}><Mail size={24} /></div>
                                <div>
                                    <h4 className="mb-1">Email Address</h4>
                                    <p className="text-muted m-0">info@smrnursingbureau.com<br />support@smrnursingbureau.com</p>
                                </div>
                            </div>

                            <div className="info-box flex items-start mb-4 gap-4 p-4 card">
                                <div className="icon-wrapper" style={{ flexShrink: 0 }}><Clock size={24} /></div>
                                <div>
                                    <h4 className="mb-1">Working Hours</h4>
                                    <p className="text-muted m-0">Office: 9:00 AM - 8:00 PM<br /><strong>Emergency Services: 24/7</strong></p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-section card highlight-card active">
                            <h3 className="mb-4">Send us a Message</h3>
                            <form onSubmit={onSubmit}>
                                <div className="grid grid-2" style={{ gap: '1rem', marginBottom: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--white)' }}>First Name</label>
                                        <input type="text" name="firstName" required className="form-input" placeholder="Your first name" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--white)' }}>Last Name</label>
                                        <input type="text" name="lastName" required className="form-input" placeholder="Your last name" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} />
                                    </div>
                                </div>

                                <div style={{ marginBottom: '1rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--white)' }}>Email Address</label>
                                    <input type="email" name="email" required className="form-input" placeholder="you@domain.com" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} />
                                </div>

                                <div style={{ marginBottom: '1rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--white)' }}>Subject</label>
                                    <input type="text" name="subject" required className="form-input" placeholder="How can we help?" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} />
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--white)' }}>Your Message</label>
                                    <textarea name="message" rows="5" required className="form-input" placeholder="Please provide details about your inquiry..." style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: 'white', outline: 'none', resize: 'vertical' }}></textarea>
                                </div>

                                <button type="submit" className="btn btn-secondary w-full" style={{ background: 'var(--white)', color: 'var(--primary)', fontWeight: 'bold' }}>
                                    Send Message
                                </button>
                                <div style={{ marginTop: '1rem', textAlign: 'center', color: 'white', fontWeight: 'bold' }}>{result}</div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Maps Embed */}
            <section className="map-section mt-5">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120054.43736800732!2d75.23467362035316!3d19.87328639556889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba2ea9261a86b%3A0xe542da65955b4fb6!2sAurangabad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716382024546!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SMR Nursing Bureau Location">
                </iframe>
            </section>
        </div>
    );
};

export default Contact;
