import React from 'react';
import { Target, Eye, Shield } from 'lucide-react';

const About = () => {
    return (
        <div className="page-wrapper animate-fade-in">
            <div className="page-header bg-light section">
                <div className="container text-center">
                    <h1 className="hero-title">About <span className="text-secondary">Us</span></h1>
                    <p className="hero-description mx-auto">Discover the legacy, vision, and mission driving SMR Nursing Institute forward.</p>
                </div>
            </div>

            <section className="section">
                <div className="container placement-grid">
                    <div className="placement-content">
                        <h2>Our Story</h2>
                        <p className="mt-2 mb-3">
                            Founded with a deep commitment to healthcare excellence, SMR Nursing Institute has grown into a premier hub for medical education. We recognized the critical need for compassionate, skilled nursing professionals in the modern world.
                        </p>
                        <p className="mb-4">
                            Our campus boasts modern infrastructure, advanced simulation labs, and a highly qualified faculty team dedicated to nurturing the next generation of healthcare leaders. We believe in holistic education that goes beyond textbooks, focusing on clinical proficiency, empathy, and leadership.
                        </p>
                    </div>
                    <div className="placement-image-container">
                        <img src="/images/about.png" alt="About SMR" className="placement-image" />
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className="grid grid-3">
                        <div className="card text-center">
                            <div className="icon-wrapper"><Eye size={32} /></div>
                            <h3>Our Vision</h3>
                            <p>To be a global leader in nursing education, recognized for clinical excellence, innovative research, and producing graduates who transform healthcare.</p>
                        </div>
                        <div className="card text-center">
                            <div className="icon-wrapper"><Target size={32} /></div>
                            <h3>Our Mission</h3>
                            <p>To provide rigorous, compassionate, and evidence-based nursing education that empowers students to deliver safe and holistic care to diverse populations.</p>
                        </div>
                        <div className="card text-center">
                            <div className="icon-wrapper"><Shield size={32} /></div>
                            <h3>Core Values</h3>
                            <p>Integrity, Empathy, Excellence, Collaboration, and Lifelong Learning form the foundation of everything we do at SMR Institute.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
