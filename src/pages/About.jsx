import React from 'react';
import { Target, Eye, Shield, CheckCircle, Activity, HeartPulse, User } from 'lucide-react';

const About = () => {
    return (
        <div className="page-wrapper animate-fade-in">
            <div className="page-header bg-light section">
                <div className="container text-center">
                    <h1 className="hero-title">About <span className="text-secondary">Us</span></h1>
                    <p className="hero-description mx-auto">Learn about the team dedicated to providing compassionate home and hospital care across Pune.</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid grid-2 items-center">
                        <div>
                            <h2 className="mb-4">Company Overview</h2>
                            <p className="text-muted mb-4">
                                SMR Nursing Bureau was established with a singular, vital goal: to bridge the gap between quality healthcare and patients who need it most entirely in the comfort of their homes or alongside them in hospitals. What started as a small group of dedicated nurses has now grown into one of the most trusted nursing and caretaker bureaus in the region.
                            </p>
                            <p className="text-muted mb-4">
                                Our approach is rooted in empathy. We don't just supply staff; we deeply evaluate the medical and emotional needs of the patient and assign highly qualified professionals who can provide both clinical excellence and warm companionship.
                            </p>
                        </div>
                        <div className="grid grid-2">
                            <div className="card text-center" style={{ background: 'var(--primary)', color: 'white' }}>
                                <h3 className="text-white text-3xl font-bold mb-2">10+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div className="card text-center" style={{ background: 'var(--secondary)', color: 'white' }}>
                                <h3 className="text-white text-3xl font-bold mb-2">500+</h3>
                                <p>Certified Staff</p>
                            </div>
                            <div className="card text-center">
                                <h3 className="text-primary text-3xl font-bold mb-2">1000+</h3>
                                <p>Families Served</p>
                            </div>
                            <div className="card text-center">
                                <h3 className="text-primary text-3xl font-bold mb-2">24/7</h3>
                                <p>Emergency Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="card highlight-card">
                            <div className="icon-wrapper"><Target size={32} /></div>
                            <h3 className="mb-3">Our Mission</h3>
                            <p>To deliver accessible, high-quality, and compassionate healthcare and non-medical assistance to individuals in need, maintaining their dignity and enhancing their overall quality of life at every step.</p>
                        </div>

                        <div className="card highlight-card">
                            <div className="icon-wrapper"><Eye size={32} /></div>
                            <h3 className="mb-3">Our Vision</h3>
                            <p>To be the most trusted and preferred nursing bureau nationwide, setting the absolute gold standard for reliability, professional ethics, and patient-centric home healthcare services.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="text-center mb-5">Meet Our Owners</h2>
                    <div className="grid grid-3 text-center">
                        <div className="card">
                            <div className="icon-wrapper mx-auto mb-3" style={{ display: 'flex', justifyContent: 'center', width: 'fit-content', borderRadius: '50%', padding: '1rem', background: 'var(--primary-light)' }}>
                                <User size={40} className="text-primary" />
                            </div>
                            <h3 className="mb-2">Shubham Labade</h3>
                            <p className="text-muted">Owner</p>
                        </div>
                        <div className="card">
                            <div className="icon-wrapper mx-auto mb-3" style={{ display: 'flex', justifyContent: 'center', width: 'fit-content', borderRadius: '50%', padding: '1rem', background: 'var(--primary-light)' }}>
                                <User size={40} className="text-primary" />
                            </div>
                            <h3 className="mb-2">Moeen Pathan</h3>
                            <p className="text-muted">Owner</p>
                        </div>
                        <div className="card">
                            <div className="icon-wrapper mx-auto mb-3" style={{ display: 'flex', justifyContent: 'center', width: 'fit-content', borderRadius: '50%', padding: '1rem', background: 'var(--primary-light)' }}>
                                <User size={40} className="text-primary" />
                            </div>
                            <h3 className="mb-2">Rudra Patil</h3>
                            <p className="text-muted">Owner</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <h2 className="text-center mb-5">Why Choose SMR Nursing Bureau?</h2>

                    <div className="grid grid-3">
                        <div className="card">
                            <Shield className="text-secondary mb-3" size={40} />
                            <h3 className="mb-2">100% Verified Professionals</h3>
                            <p className="text-muted">Every nurse and caretaker passes rigorous background checks, police verification, and intensive medical skill assessment before deployment.</p>
                        </div>

                        <div className="card">
                            <HeartPulse className="text-secondary mb-3" size={40} />
                            <h3 className="mb-2">Compassionate Care</h3>
                            <p className="text-muted">We hire for empathy as much as skill. Our caretakers treat patients like family, providing essential emotional support alongside medical aid.</p>
                        </div>

                        <div className="card">
                            <Activity className="text-secondary mb-3" size={40} />
                            <h3 className="mb-2">Uninterrupted Support</h3>
                            <p className="text-muted">Medical needs don't take holidays. We guarantee 24/7 availability and offer immediate staff replacements if your assigned caretaker falls ill.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
