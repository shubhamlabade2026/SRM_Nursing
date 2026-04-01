import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import './Contact.css';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const Contact = () => {
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("idle"); 

    const onSubmit = async (event) => {
        event.preventDefault();
        setStatus("submitting");
        setResult("Sending your message...");
        const formData = new FormData(event.target);

        formData.append("access_key", "1f156382-e9c0-4f0d-8d61-5419137549b4");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                setResult("Message Sent Successfully! We will respond shortly.");
                event.target.reset();
            } else {
                setStatus("error");
                setResult(data.message);
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            setResult("An error occurred while submitting. Please try again.");
        }
    };

    return (
        <div className="page-wrapper contact-wrapper relative">
            <SEO 
                title="Contact Us - 24/7 Helpline | SMR Nursing Bureau"
                description="Get in touch with SMR Nursing Bureau. Our medical coordination team operates 24/7 for immediate allocation of caretakers or ICU nurses."
                keywords="Contact SMR Nursing Bureau, hire caretaker Pune, nursing helpline, medical emergency support Pune"
                url="https://srmnursing.vercel.app/contact"
            />

            {/* Premium Header Section */}
            <div className="contact-hero gradient-bg">
                <div className="mesh-blob blob-1"></div>
                <div className="mesh-blob blob-2"></div>
                
                <div className="container text-center relative z-10 py-5">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="hero-content mx-auto mt-5">
                        <motion.div variants={fadeIn} className="badge glass-panel mx-auto mb-3" style={{ width: 'fit-content' }}>
                            🎧 Available 24/7
                        </motion.div>
                        <motion.h1 variants={fadeIn} className="contact-title text-gradient">
                            Reach Out to SMR Bureau
                        </motion.h1>
                        <motion.p variants={fadeIn} className="contact-subtitle text-muted mx-auto" style={{ maxWidth: '600px', fontSize: '1.2rem' }}>
                            Your health and peace of mind are our absolute priority. Connect with our dedicated care team instantly.
                        </motion.p>
                    </motion.div>
                </div>
                
                {/* Decorative Wave */}
                <div className="wave-divider" style={{ bottom: '-2px' }}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.83,123.63,195,107.57,243.61,95.3,281.25,66.82,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>



            <section className="section contact-main-section bg-white pt-2 pb-5">
                <div className="container">
                    <div className="contact-grid">

                        {/* Contact Information Side */}
                        <motion.div 
                            className="contact-info-panel"
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                        >
                            <motion.h2 variants={fadeIn} className="mb-3">Get In Touch</motion.h2>
                            <motion.p variants={fadeIn} className="text-muted mb-5">
                                Our medical coordination team operates round the clock. Call us for immediate allocation of hospital caretakers or specialized ICU nurses.
                            </motion.p>

                            <motion.div variants={fadeIn} className="info-card glass-panel flex align-center gap-3 mb-3 p-3">
                                <div className="icon-glow text-primary"><MapPin size={24} /></div>
                                <div className="info-content">
                                    <h4 className="m-0">Head Office</h4>
                                    <p className="m-0 text-muted">SMR Nursing Bureau, Near Main City Hospital, Pune, MH, India</p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeIn} className="info-card glass-panel flex align-center gap-3 mb-3 p-3">
                                <div className="icon-glow text-primary"><Phone size={24} /></div>
                                <div className="info-content">
                                    <h4 className="m-0">24/7 Helpline</h4>
                                    <p className="m-0 text-muted fw-bold">Moeen Pathan: +91 7498059801</p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeIn} className="info-card glass-panel flex align-center gap-3 mb-3 p-3">
                                <div className="icon-glow text-primary"><Mail size={24} /></div>
                                <div className="info-content">
                                    <h4 className="m-0">Email Address</h4>
                                    <p className="m-0 text-muted">moeensr9101@gmail.com</p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeIn} className="info-card highlight-info mt-4">
                                <div className="glass-card active-gradient p-4" style={{ borderRadius: '20px' }}>
                                    <div className="flex align-center gap-3 mb-2 text-white">
                                        <Clock size={28} />
                                        <h4 className="m-0 text-white">Emergency Services</h4>
                                    </div>
                                    <p className="m-0" style={{ color: 'rgba(255,255,255,0.9)' }}>
                                        Available 24 hours a day, 7 days a week including holidays. We are always ready to serve you.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form Side */}
                        <motion.div 
                            className="contact-form-panel glass-card p-5"
                            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                            style={{ position: 'relative', overflow: 'hidden' }}
                        >
                            <div className="mesh-blob blob-3" style={{ background: 'rgba(251, 194, 94, 0.15)', zIndex: 0 }}></div>
                            
                            <div className="form-header relative z-10">
                                <h3>Send us a Message</h3>
                                <p className="text-muted">Fill out the form and our coordinators will assist you instantly.</p>
                            </div>

                            <form onSubmit={onSubmit} className="modern-form relative z-10">
                                <div className="form-row flex gap-3 mb-4">
                                    <div className="input-group w-full relative">
                                        <input type="text" name="firstName" required className="modern-input" placeholder=" " id="fname" />
                                        <label htmlFor="fname" className="floating-label">First Name</label>
                                    </div>
                                    <div className="input-group w-full relative">
                                        <input type="text" name="lastName" required className="modern-input" placeholder=" " id="lname" />
                                        <label htmlFor="lname" className="floating-label">Last Name</label>
                                    </div>
                                </div>

                                <div className="input-group relative mb-4">
                                    <input type="email" name="email" required className="modern-input" placeholder=" " id="email" />
                                    <label htmlFor="email" className="floating-label">Email Address</label>
                                </div>

                                <div className="input-group relative mb-4">
                                    <input type="text" name="subject" required className="modern-input" placeholder=" " id="subject" />
                                    <label htmlFor="subject" className="floating-label">Subject</label>
                                </div>

                                <div className="input-group relative mb-4">
                                    <textarea name="message" rows="4" required className="modern-input modern-textarea" placeholder=" " id="message"></textarea>
                                    <label htmlFor="message" className="floating-label">How can we help?</label>
                                </div>

                                <button type="submit" className={`btn btn-primary w-full ${status === 'submitting' ? 'loading' : ''}`} disabled={status === 'submitting'}>
                                    <span>Send Message</span>
                                    <Send size={18} className="submit-icon" />
                                </button>

                                {result && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                        className={`form-status p-3 mt-3 rounded fw-bold text-center ${status === 'success' ? 'bg-secondary text-white' : 'bg-red text-white'}`}
                                        style={{ borderRadius: '12px', background: status === 'success' ? 'var(--secondary)' : '#e63946' }}
                                    >
                                        {result}
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Google Maps Embed with Premium Overlay */}
            <section className="contact-map-section relative" style={{ height: '500px' }}>
                <div className="map-overlay glass-panel p-4" style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 10, textAlign: 'center', width: '90%', maxWidth: '400px' }}>
                    <h2 className="m-0 text-gradient">Find Us Locally</h2>
                    <p className="m-0 text-muted mt-2">Proudly serving Pune with premium medical support.</p>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.91746208882!2d73.78013854194098!3d18.5246164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716383000000!5m2!1sen!2sin"
                    className="styled-map"
                    style={{ width: '100%', height: '100%', border: 'none', filter: 'contrast(1.1) opacity(0.9)' }}
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
