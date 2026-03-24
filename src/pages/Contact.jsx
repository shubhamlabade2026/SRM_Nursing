import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("idle"); // idle, submitting, success, error

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
        <div className="page-wrapper contact-wrapper animate-fade-in relative">

            {/* Header Section */}
            <div className="contact-hero">
                <div className="container text-center relative z-10">
                    <h1 className="contact-title animate-slide-up">Reach Out to <span className="text-secondary">SMR Bureau</span></h1>
                    <p className="contact-subtitle mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Your health and peace of mind are our absolute priority. Connect with our dedicated care team 24/7.
                    </p>
                </div>
                <div className="contact-hero-bg"></div>
            </div>

            {/* Floating WhatsApp Button */}
            <a href="https://wa.me/917498059801" target="_blank" rel="noopener noreferrer" className="whatsapp-float pulse-animation">
                <MessageCircle size={32} />
            </a>

            <section className="section contact-main-section">
                <div className="container">
                    <div className="contact-grid">

                        {/* Contact Information Side */}
                        <div className="contact-info-panel">
                            <h2 className="mb-4 text-dark">Get In Touch</h2>
                            <p className="text-muted mb-5">
                                Our medical coordination team operates round the clock. Call us for immediate allocation of hospital caretakers or specialized ICU nurses.
                            </p>

                            <div className="info-card">
                                <div className="icon-circle"><MapPin size={24} /></div>
                                <div className="info-content">
                                    <h4>Head Office Location</h4>
                                    <p>SMR Nursing Bureau Building,<br />Near Main City Hospital,<br />Pune, 411001, MH, India</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="icon-circle"><Phone size={24} /></div>
                                <div className="info-content">
                                    <h4>24/7 Helpline</h4>
                                    <p>Moeen Pathan<br />+91 7498059801</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="icon-circle"><Mail size={24} /></div>
                                <div className="info-content">
                                    <h4>Email Address</h4>
                                    <p>info@smrnursingbureau.com<br />support@smrnursingbureau.com</p>
                                </div>
                            </div>

                            <div className="info-card highlight-info">
                                <div className="icon-circle text-white"><Clock size={24} /></div>
                                <div className="info-content text-white">
                                    <h4 className="text-white">Emergency Services</h4>
                                    <p className="text-white opacity-90 m-0">Available 24 hours a day, 7 days a week including holidays.</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Side */}
                        <div className="contact-form-panel glass-panel">
                            <div className="form-header">
                                <h3>Send us a Message</h3>
                                <p>Fill out the form and our coordinators will assist you immediately.</p>
                            </div>

                            <form onSubmit={onSubmit} className="modern-form">
                                <div className="form-row">
                                    <div className="input-group">
                                        <input type="text" name="firstName" required className="modern-input" placeholder=" " id="fname" />
                                        <label htmlFor="fname" className="floating-label">First Name</label>
                                    </div>
                                    <div className="input-group">
                                        <input type="text" name="lastName" required className="modern-input" placeholder=" " id="lname" />
                                        <label htmlFor="lname" className="floating-label">Last Name</label>
                                    </div>
                                </div>

                                <div className="input-group">
                                    <input type="email" name="email" required className="modern-input" placeholder=" " id="email" />
                                    <label htmlFor="email" className="floating-label">Email Address</label>
                                </div>

                                <div className="input-group">
                                    <input type="text" name="subject" required className="modern-input" placeholder=" " id="subject" />
                                    <label htmlFor="subject" className="floating-label">Subject</label>
                                </div>

                                <div className="input-group">
                                    <textarea name="message" rows="4" required className="modern-input modern-textarea" placeholder=" " id="message"></textarea>
                                    <label htmlFor="message" className="floating-label">How can we help?</label>
                                </div>

                                <button type="submit" className={`btn form-submit-btn ${status === 'submitting' ? 'loading' : ''}`} disabled={status === 'submitting'}>
                                    <span>Send Message</span>
                                    <Send size={18} className="submit-icon" />
                                </button>

                                {result && (
                                    <div className={`form-status ${status}`}>
                                        {result}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Maps Embed */}
            <section className="contact-map-section">
                <div className="map-overlay">
                    <h2>Find Us Locally</h2>
                    <p>Proudly serving Pune and surrounding areas with premium medical support.</p>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.91746208882!2d73.78013854194098!3d18.5246164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716383000000!5m2!1sen!2sin"
                    className="styled-map"
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
