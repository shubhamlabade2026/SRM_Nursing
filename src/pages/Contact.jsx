import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

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
                setResult("Message Sent Successfully! We will get back to you shortly.");
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
        <div className="page-wrapper animate-fade-in">
            <div className="page-header bg-light section">
                <div className="container text-center">
                    <h1 className="hero-title">Get In <span className="text-secondary">Touch</span></h1>
                    <p className="hero-description mx-auto">Have questions? Our admissions and counseling team is here to guide you.</p>
                </div>
            </div>

            <section className="section bg-light pb-5">
                <div className="container">
                    <div className="grid grid-2" style={{ gap: '4rem' }}>

                        {/* Contact Details */}
                        <div>
                            <h2 className="mb-4 text-center" style={{ textAlign: 'left' }}>Contact Information</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div className="icon-wrapper" style={{ margin: 0 }}><MapPin size={24} /></div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.25rem' }}>Campus Address</h4>
                                        <p className="text-muted">123 Health City Road, Medical Campus, Metropolis, 400001</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div className="icon-wrapper" style={{ margin: 0 }}><Phone size={24} /></div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.25rem' }}>Phone Numbers</h4>
                                        <p className="text-muted">+1 (234) 567-890<br />+1 (234) 567-891 (Admissions)</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div className="icon-wrapper" style={{ margin: 0 }}><Mail size={24} /></div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.25rem' }}>Email Addresses</h4>
                                        <p className="text-muted">info@smrnursing.edu<br />admissions@smrnursing.edu</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div className="icon-wrapper" style={{ margin: 0 }}><Clock size={24} /></div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.25rem' }}>Office Hours</h4>
                                        <p className="text-muted">Monday - Saturday: 9:00 AM - 5:00 PM<br />Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="card" style={{ padding: '3rem 2rem' }}>
                            <h2 className="mb-4 text-center">Send us a Message</h2>
                            <form onSubmit={onSubmit}>
                                <div className="grid grid-2" style={{ gap: '1rem' }}>
                                    <div style={{ marginBottom: "1rem" }}>
                                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>First Name</label>
                                        <input type="text" name="firstName" required placeholder="First Name" style={{ width: "100%", padding: "0.85rem", borderRadius: "8px", border: "1px solid var(--border)", outline: "none" }} />
                                    </div>
                                    <div style={{ marginBottom: "1rem" }}>
                                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>Last Name</label>
                                        <input type="text" name="lastName" required placeholder="Last Name" style={{ width: "100%", padding: "0.85rem", borderRadius: "8px", border: "1px solid var(--border)", outline: "none" }} />
                                    </div>
                                </div>

                                <div style={{ marginBottom: "1rem" }}>
                                    <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>Email Address</label>
                                    <input type="email" name="email" required placeholder="Email" style={{ width: "100%", padding: "0.85rem", borderRadius: "8px", border: "1px solid var(--border)", outline: "none" }} />
                                </div>

                                <div style={{ marginBottom: "1rem" }}>
                                    <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>Subject</label>
                                    <select name="subject" required style={{ width: "100%", padding: "0.85rem", borderRadius: "8px", border: "1px solid var(--border)", outline: "none", background: "white" }}>
                                        <option value="" disabled selected>Select a subject</option>
                                        <option value="Admissions Inquiry">Admissions Inquiry</option>
                                        <option value="General Information">General Information</option>
                                        <option value="Hostel Details">Hostel Details</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div style={{ marginBottom: "1.5rem" }}>
                                    <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>Your Message</label>
                                    <textarea name="message" required rows="4" placeholder="How can we help you?" style={{ width: "100%", padding: "0.85rem", borderRadius: "8px", border: "1px solid var(--border)", outline: "none", resize: "vertical" }} />
                                </div>

                                <button type="submit" className="btn btn-primary w-full" style={{ padding: '1rem' }}>
                                    Send Message
                                </button>
                                <div style={{ marginTop: "1rem", textAlign: "center", color: "var(--primary)", fontWeight: 500 }}>{result}</div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
